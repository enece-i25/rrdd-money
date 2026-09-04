# Architecture

The application uses the Next.js App Router with Server Components by default.

- `src/app`: routing, metadata, and server-side composition.
- `src/features`: feature-owned UI and data gateways.
- `src/lib/domain`: framework-independent product types.
- `src/lib/pricing`: deterministic business rules.

`getProviderDashboard` is a temporary fixture gateway. Replace it with a PostgreSQL repository while keeping the UI contract stable. Payment confirmation, heartbeats, disputes, credits, and withdrawals must be server-side services or route handlers, never client-side logic.

## Package manager

Use pnpm through Corepack: `corepack pnpm <command>`. npm lockfiles are not part of this repository.