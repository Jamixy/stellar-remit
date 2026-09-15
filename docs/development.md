# Development

Install Node.js 20+, npm 10+, and PostgreSQL 15+. Copy `.env.example` to `.env`, then run `npm install` and `npx prisma generate`.

Use `npm run dev` for the web and API together. Use `npm run typecheck`, `npm test`, and `npm run build` before opening a pull request. Keep changes focused, add tests for validation and API behavior, and never add production credentials.