import { describe, expect, it } from "vitest";
import { StellarService } from "../src/index.js";

describe("StellarService", () => {
  it("creates a valid testnet keypair", () => {
    const account = new StellarService().createTestnetAccount();
    expect(account.publicKey).toMatch(/^G[A-Z2-7]{55}$/);
    expect(account.secretKey).toMatch(/^S[A-Z2-7]{55}$/);
  });
});