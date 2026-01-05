# Multi-stage build for Next.js app using pnpm
FROM node:20-alpine AS base
WORKDIR /app
RUN corepack enable pnpm

# Install dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable pnpm
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000
CMD ["pnpm", "start"]
