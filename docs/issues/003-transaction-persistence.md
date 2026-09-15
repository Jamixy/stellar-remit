# Transaction Persistence and History

**Suggested title:** Persist transaction records and build history views

## Context
The Stellar package can look up a transaction, but application-level transaction records and history persistence are intentionally incomplete.

## Scope
- Store a transaction record after quote, submission, and status changes.
- Reconcile pending records with Horizon safely and idempotently.
- Implement sent, received, pending, successful, and failed filters.
- Add transaction detail and receipt views with explorer links.

## Acceptance criteria
- Records are scoped to authenticated users.
- Horizon retries do not create duplicates.
- Hashes, amounts, assets, status, and timestamps are displayed accurately.
- Tests cover failed, pending, and successful status transitions.

## Non-goals
Do not treat local records as proof of settlement without Horizon verification.