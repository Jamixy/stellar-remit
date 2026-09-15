import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const root = fileURLToPath(new URL("../../", import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@stellar-remit/stellar": `${root}/packages/stellar/src/index.ts`,
      "@stellar-remit/validation": `${root}/packages/validation/src/index.ts`
    }
  }
});