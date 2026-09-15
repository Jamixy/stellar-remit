# Comprehensive Integration Testing

**Suggested title:** Add API, Horizon, database, and browser integration coverage

## Context
The repository currently has focused validation and API/unit test scaffolding, but no comprehensive integration suite.

## Scope
- Add isolated PostgreSQL test setup and migration checks.
- Add Horizon testnet contract tests with controlled accounts or recorded fixtures.
- Add API flow tests from quote through status lookup.
- Add basic browser tests for critical responsive flows.

## Acceptance criteria
- Tests are deterministic and do not use production funds.
- External testnet tests are opt-in and clearly separated from CI-safe tests.
- CI reports typecheck, unit, API, and browser results.

## Non-goals
Do not hide flaky external-network tests inside the default unit suite.