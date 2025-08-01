# Base Image
From node:20-alpine AS base

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

# Build Layer
FROM base AS builder

COPY . .

RUN npm run build

# 3. Production-ready image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# only copy what's needed to run the app
COPY --from=base /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/src ./src

EXPOSE 3000
CMD ["npm", "start"]