# Next.js Mantine Turborepo Template

This repository is a template for developing modern web applications using Next.js, [Mantine UI](https://mantine.dev/), and Turborepo. The monorepo architecture optimizes code sharing and development processes.

## Features

- **Turborepo**: Efficient build and development processes in a monorepo structure
- **Next.js App Router**: React framework for modern web applications
- **Mantine UI**: Ready-to-use UI components with theme support
- **TypeScript**: Type safety and improved developer experience
- **pnpm**: Fast and disk space-efficient package manager
- **Biome**: Linting and code formatting

## Structure

- `apps/web`: The main Next.js application
- `packages/ui`: Shared UI components
- `packages/typescript-config`: Shared TypeScript configuration

## Installation

```bash
# Install pnpm (if not already installed)
npm install -g pnpm

# Install dependencies
pnpm install

# Run in development mode
pnpm dev
```

## Usage

Add a new page by creating a new folder in the `apps/web/app` directory. Create UI components in the `packages/ui/src` directory and import them into your application.

## Building for Production

```bash
# Build all applications and packages
pnpm build

# Start the production server
pnpm start
```

## Scripts

- `pnpm dev`: Start all applications in development mode
- `pnpm build`: Build all applications and packages
- `pnpm clean`: Clean build artifacts and node_modules
