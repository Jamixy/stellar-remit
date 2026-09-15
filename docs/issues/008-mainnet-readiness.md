# Production and Mainnet Readiness

**Suggested title:** Establish the security and operational requirements for mainnet support

## Context
StellarRemit is intentionally testnet-only. Mainnet support must be a separate project milestone, not a configuration toggle.

## Scope
- Complete security, custody, dependency, and threat-model reviews.
- Define compliance, monitoring, incident response, backups, and key rotation requirements.
- Verify network and asset configuration cannot be confused across environments.
- Create a staged deployment plan with rollback and operational ownership.

## Acceptance criteria
- Independent security review is complete.
- Production controls and runbooks are documented and tested.
- Mainnet is disabled by default until all launch gates are approved.

## Non-goals
Do not enable mainnet transactions as part of this planning issue.