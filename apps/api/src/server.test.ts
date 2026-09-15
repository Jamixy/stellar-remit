import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "./server.js";

describe("API", () => {
  it("reports the testnet health status", async () => {
    const response = await request(app).get("/health");
    expect(response.body).toEqual({ status: "ok", network: "testnet" });
  });
});