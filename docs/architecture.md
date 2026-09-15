# Architecture

The web app is a presentation layer. It does not import Stellar SDK APIs or construct transactions. The Express API owns request orchestration and delegates Stellar work to `packages/stellar`. `packages/validation` is shared by API boundaries and future form actions. Prisma is the persistence boundary for users, wallets, contacts, and transaction records.

The current MVP deliberately keeps wallet creation explicit and testnet-only. A production wallet custody model requires a threat model and key-management decision before implementation.