# QR Payment Requests

**Suggested title:** Add QR receiving and payment-request enhancements

## Context
The current MVP does not provide a complete QR payment-request experience.

## Scope
- Generate an accessible QR code for a public address.
- Support encoded asset and amount request parameters with strict validation.
- Add copy, share, and invalid-request states.
- Document privacy and replay considerations.

## Acceptance criteria
- QR data never includes secret keys.
- Scanning produces a reviewable recipient and amount, not an automatic payment.
- Tests cover malformed, oversized, and unsupported requests.

## Non-goals
Do not create custodial or production payment links in this issue.