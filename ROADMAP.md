# StellarRemit Roadmap

StellarRemit is an ongoing open-source Stellar Testnet MVP. This roadmap describes future work; the items below are intentionally not implemented in the current foundation.

## Foundation Available Now

- Next.js dashboard shell and requested route entry points
- Express health, wallet generation, balance, payment quote, and transaction lookup endpoints
- Dedicated Stellar SDK service configured for testnet
- Shared address and payment validation
- Prisma schema for the future persistence layer
- Unit and API test scaffolding

## Future Improvements

1. Authentication and session persistence
2. Contact persistence and trusted-recipient workflows
3. Transaction persistence, receipts, and advanced history filters
4. Complete payment confirmation and submission UX
5. QR payment request and receiving enhancements
6. Comprehensive API, Stellar, and browser integration testing
7. Key custody review and secure wallet management
8. Production/mainnet support only after a separate security, compliance, and operational review

Each item should be developed through a GitHub Issue with explicit scope, testnet safeguards, and acceptance criteria. Use the repository's issue templates to propose work, then submit a focused pull request.