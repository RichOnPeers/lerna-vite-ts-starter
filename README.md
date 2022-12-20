# Modern MONOREPO starter
- Lerna (TS)
- Vite (configured for React TS)
- Husky

## What's included

### Lerna
Packages connected with a shared `Typescript`, `eslint` and `prettier` config and configured to support caching for build and test.
- `packages` for shared generic helper functions, configs and more
- `components` for shared (React) components
- `apps` for Vite applications

### Vite
Modern front-end tooling. Setup as default for React TS projects.

### Husky
- Validates branch name
- Lints staged files
- Runs tests

... on commit


## Get started
Change the package names `@mono` and script variables `guide` in the root `package.json` to match your setup.
Update the links to packages in `devDependencies` in every affected `package.json`.
- `yarn` to bootstrap the monorepo and link packages
- `yarn tsc` to build packages
- `yarn test` to test packages
- `yarn start` to start the Vite dev environment
- `yarn build` to build the Vite application
- `yarn preview` to preview the Vite production build locally
