# Build de producao para upra-site (Next.js 15 marketing site).
# Multi-stage para imagem final pequena (~150 MB).
# Padrao: igual ao clara-studio (consistencia da stack UPRA).

# ---------- Stage 1: deps ----------
FROM node:22-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --prefer-offline

# ---------- Stage 2: builder ----------
FROM node:22-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Web3Forms key precisa de estar disponivel em build time porque e NEXT_PUBLIC_*.
# Passada via --build-arg ou docker-compose build.args.
ARG NEXT_PUBLIC_WEB3FORMS_KEY
ENV NEXT_PUBLIC_WEB3FORMS_KEY=${NEXT_PUBLIC_WEB3FORMS_KEY}

RUN npm run build

# ---------- Stage 3: runner ----------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN apk add --no-cache curl

# Cria utilizador nao-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Copia build do Next em modo standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

# Healthcheck — Caddy deteta containers nao saudaveis
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD curl -fsS http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
