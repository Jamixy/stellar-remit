# Contributing

StellarRemit is a public Stellar Testnet MVP. Contributions should improve the foundation without implying that testnet-only functionality is production-ready.

## Set Up

Prerequisites are Node.js 20+, npm 10+, and PostgreSQL 15+.

```bash
git clone https://github.com/your-org/stellar-remit.git
cd stellar-remit
npm install
Copy-Item .env.example .env
npx prisma generate
```

Set `DATABASE_URL`, `SESSION_SECRET`, and the testnet Horizon settings in `.env`. Never commit `.env` or real keys.

## Run Stellar Testnet Locally

Keep `STELLAR_NETWORK=testnet` and use `https://horizon-testnet.stellar.org`. Generate or fund development accounts with the official Stellar testnet faucet. Testnet XLM has no real-world value. Set a testnet asset issuer only when testing an issued asset; do not use mainnet issuers or funds.

Start the web and API applications together:

```bash
npm run dev
```

The web app is available at `http://localhost:3000` and the API at `http://localhost:4000`.

## Work on an Issue

1. Read the issue and related documentation in `docs/issues/`.
2. Comment on the issue before starting substantial or architectural work.
3. Fork the repository or create a branch from `main`.
4. Use a focused branch name such as `feat/issue-42-payment-quote` or `docs/issue-18-roadmap`.
5. Keep changes scoped to the issue and add tests or documentation when behavior changes.

```bash
git checkout -b feat/issue-42-payment-quote
```

## Validate Changes

```bash
npm run typecheck
npm test
npm run build
```

If PostgreSQL is required by your change, also run the Prisma migration locally. Report environment-specific blockers clearly in the pull request.

## Pull Requests

Open a pull request against `main` with:

- A concise summary and link to the issue
- What changed and what remains intentionally out of scope
- Tests and commands run
- Screenshots for UI changes
- Confirmation that no secrets, production endpoints, or real funds were used

Please open an issue before large architectural changes. Reviewers may request narrower scope, additional tests, or explicit testnet safeguards.