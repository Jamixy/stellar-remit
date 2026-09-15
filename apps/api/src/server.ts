import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { sendPaymentSchema, stellarPublicKey } from "@stellar-remit/validation";
import { stellarService } from "@stellar-remit/stellar";

export const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.WEB_ORIGIN ?? "http://localhost:3000" }));
app.use(express.json({ limit: "32kb" }));
app.use(morgan("tiny"));

app.get("/health", (_request, response) => response.json({ status: "ok", network: "testnet" }));

app.post("/api/wallets", (_request, response) => {
  const wallet = stellarService.createTestnetAccount();
  const payload = { publicKey: wallet.publicKey, network: "testnet", warning: "Testnet only. The secret key is shown once in development." };
  if (process.env.NODE_ENV === "development") return response.status(201).json({ ...payload, secretKey: wallet.secretKey });
  return response.status(201).json(payload);
});

app.get("/api/wallets/:publicKey/balances", async (request, response) => {
  const parsed = stellarPublicKey.safeParse(request.params.publicKey);
  if (!parsed.success) return response.status(400).json({ error: "Invalid Stellar public address" });
  try { return response.json({ balances: await stellarService.readBalances(parsed.data) }); }
  catch { return response.status(502).json({ error: "Unable to read the Stellar testnet account" }); }
});

app.post("/api/payments/quote", (request, response) => {
  const parsed = sendPaymentSchema.safeParse(request.body);
  if (!parsed.success) return response.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid payment" });
  return response.json({ ...parsed.data, network: "testnet", estimatedFeeXlm: "0.00001", expiresInSeconds: 180 });
});

app.get("/api/transactions/:hash", async (request, response) => {
  try { return response.json(await stellarService.getTransaction(request.params.hash)); }
  catch { return response.status(404).json({ error: "Transaction not found on Stellar testnet" }); }
});

if (process.env.NODE_ENV !== "test") {
  app.listen(Number(process.env.PORT ?? 4000));
}