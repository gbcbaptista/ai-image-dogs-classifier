# deps
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --production

# builder
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

COPY package.json package-lock.json* ./
RUN npm install

RUN npm run build

#runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

EXPOSE 3000

USER node

CMD ["node", "server.js"]
