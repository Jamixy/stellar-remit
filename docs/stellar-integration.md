# Stellar Integration

`@stellar-remit/stellar` is configured with `STELLAR_NETWORK=testnet` and the Horizon testnet URL by default. `StellarService` creates keypairs, loads accounts, normalizes balances, builds payment transactions with a bounded timeout, signs them, submits them, and reads transaction records.

The API should validate a destination and amount before calling the service. A confirmation step belongs between quote and submission. Secret keys should remain server-side and should be encrypted at rest when custody is introduced.