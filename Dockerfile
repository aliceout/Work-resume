# syntax=docker/dockerfile:1.7

# ---------- 1. Build the Astro static site ----------
FROM node:22-alpine AS builder
WORKDIR /app

# Enable pnpm via corepack (version pinned in package.json's packageManager)
RUN corepack enable

# Copy ALL pnpm config files so onlyBuiltDependencies (esbuild, sharp) is honoured
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

# Install with --ignore-scripts (pnpm 11's approval check would otherwise fail
# in CI), then explicitly rebuild native binaries we actually need.
RUN pnpm install --frozen-lockfile --ignore-scripts \
 && pnpm rebuild esbuild sharp

# Copy the rest of the source and build the static site → /app/dist
COPY . .
RUN pnpm build

# ---------- 2. Serve dist/ as static content ----------
FROM node:22-alpine AS runner
WORKDIR /app

# `serve` is a small, well-maintained static file server
RUN npm install -g serve@14

COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
