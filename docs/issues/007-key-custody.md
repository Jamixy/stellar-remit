# Testnet Key Custody Review

**Suggested title:** Define secure wallet custody and development-only key import

## Context
Wallet generation exists at the testnet service boundary. A production-quality custody strategy has not been selected and must not be inferred from the current endpoint.

## Scope
- Document custody threat models and user-owned wallet alternatives.
- Decide whether server-side encryption, a browser wallet, or another signer is appropriate.
- Add explicit development-only import safeguards if import is implemented.
- Add secret redaction and security tests.

## Acceptance criteria
- No secret is persisted or returned outside an explicitly reviewed flow.
- Production deployment cannot accidentally use testnet development behavior.
- The decision and residual risks are documented before implementation.

## Non-goals
Do not accept production secrets or real funds while this issue is open.