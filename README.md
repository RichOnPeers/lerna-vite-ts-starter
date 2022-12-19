# Modern MONOREPO starter
- Lerna (TS)
- Vite (configured for React TS)
- Husky

## Lerna
Packages connected with a shared `Typescript`, `eslint` and `prettier` config.
- `packages` for shared generic helper functions, configs and more
- `components` for shared React components
- `apps` for Vite applications

## Vite
Modern front-end tooling. Setup as default for React TS projects.

## Husky
- Validates branch name
- Lints staged files
- Runs tests

... on commit
