import { describe, expect, it } from "vitest";
import { sendPaymentSchema } from "../src/index.js";

describe("sendPaymentSchema", () => {
  it("rejects an invalid address and zero amount", () => {
    expect(sendPaymentSchema.safeParse({ destination: "bad", amount: "0", assetCode: "USDC" }).success).toBe(false);
  });
});