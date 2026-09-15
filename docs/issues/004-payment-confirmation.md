# Complete Payment Confirmation UX

**Suggested title:** Implement quote, confirmation, submission, and receipt flow

## Context
The current API supports payment validation and fee quotes, but the complete confirmation and submission experience is not implemented.

## Scope
- Add recipient and amount form states with accessible validation.
- Display asset, destination, amount, estimated fee, network, and expiration.
- Require an explicit confirmation before submission.
- Show pending, success, and failure states with transaction hash and explorer link.

## Acceptance criteria
- A user can review all transaction details before submission.
- Expired quotes cannot be submitted silently.
- Secret keys are never logged or exposed in client-side telemetry.
- Tests cover cancellation, rejected submission, retry, and success.

## Non-goals
Do not enable production-network submission.