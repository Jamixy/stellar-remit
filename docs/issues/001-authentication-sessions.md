# Authentication and Session Persistence

**Suggested title:** Implement email/password authentication and secure sessions

## Context
StellarRemit currently has no authentication or persisted user session. The route and API foundation must remain usable without claiming that accounts are implemented.

## Scope
- Add registration, login, logout, and session inspection.
- Hash passwords with a reviewed password-hashing library.
- Persist users and sessions through Prisma.
- Add rate limits, secure cookies, validation, and account error handling.

## Acceptance criteria
- Unauthenticated requests cannot access user-owned resources.
- Passwords and session secrets are never logged or returned.
- Unit and API tests cover success, invalid credentials, expiry, and logout.
- Documentation explains local setup and testnet-only scope.

## Non-goals
Do not add mainnet wallet custody or production identity verification.