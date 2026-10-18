# syntax=docker/dockerfile:1

# ---------- 1. Build the Astro static site ----------
FROM node:24-alpine AS builder
WORKDIR /app

# Enable pnpm via corepack (version pinned in package.json's packageManager)
RUN corepack enable

# Copy ALL pnpm config files so allowBuilds (esbuild, sharp) is honoured
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

# Copy the rest of the source and build the static site → /app/dist
COPY . .
RUN pnpm build

# ---------- 2. Serve dist/ as static content ----------
FROM node:24-alpine AS runner
WORKDIR /app

# `serve` is a small, well-maintained static file server
RUN npm install -g serve@14

COPY --from=builder /app/dist ./dist

EXPOSE 3000
# NOTE: no -s/--single flag — that's SPA mode (fallback all 404s to
# /index.html). Astro produces multi-page static files; we want serve
# to do its standard directory-index lookup (/fr/ → /fr/index.html).
CMD ["serve", "-l", "3000", "dist"]
