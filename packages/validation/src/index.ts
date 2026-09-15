import { StrKey } from "@stellar/stellar-sdk";
import { z } from "zod";

export const stellarPublicKey = z.string().refine((value) => StrKey.isValidEd25519PublicKey(value), "Invalid Stellar public address");
export const sendPaymentSchema = z.object({
  destination: stellarPublicKey,
  amount: z.string().regex(/^\d+(\.\d{1,7})?$/, "Amount must be a positive decimal with up to 7 places").refine((value) => Number(value) > 0, "Amount must be greater than zero"),
  assetCode: z.string().min(1).max(12).default("USDC")
});
export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(12, "Use at least 12 characters"),
  country: z.string().min(2).max(2),
  currency: z.string().length(3)
});

export type SendPaymentInput = z.infer<typeof sendPaymentSchema>;