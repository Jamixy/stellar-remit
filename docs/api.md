# API

Base URL: `http://localhost:4000`

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/health` | Service and network status |
| POST | `/api/wallets` | Generate a testnet keypair |
| GET | `/api/wallets/:publicKey/balances` | Read Horizon balances |
| POST | `/api/payments/quote` | Validate a payment and estimate the XLM fee |
| GET | `/api/transactions/:hash` | Read a submitted transaction |

All errors use `{ "error": "..." }`. The wallet endpoint is deliberately marked testnet-only and should not be exposed without authentication in a deployed environment.