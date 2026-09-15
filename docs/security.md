# Security Model

The repository ignores `.env` files and defaults to Stellar testnet. Helmet, a JSON body limit, input validation, and explicit transaction confirmation are part of the intended API boundary.

Remaining security work includes password hashing and sessions, rate limiting, CSRF protection for cookie sessions, encrypted key custody, audit logging without secrets, dependency scanning, and an external review. Do not use this prototype with real funds.