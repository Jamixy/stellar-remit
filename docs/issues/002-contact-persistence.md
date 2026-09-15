# Contact Persistence

**Suggested title:** Persist trusted recipients and contact search

## Context
The current contacts route is a dashboard shell. Contacts are not stored or connected to users.

## Scope
- Add authenticated CRUD endpoints for contacts.
- Validate Stellar public addresses and country codes.
- Add name/address/country search and duplicate handling.
- Connect the UI to persisted contacts and recipient selection.

## Acceptance criteria
- A user can create, edit, search, and delete only their own contacts.
- Invalid addresses and duplicate entries return clear validation errors.
- Tests cover authorization and search behavior.

## Non-goals
Do not add address-book imports or cross-user contact discovery.