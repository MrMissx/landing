FROM node:18-alpine AS base

FROM base as deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN yarn global add pnpm && pnpm i --frozen-lockfile


FROM base as builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build


FROM base as runner

WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 svelte
RUN adduser --system --uid 1001 svelte

COPY --from=builder /app/build .
COPY --from=builder /app/package.json .

EXPOSE 3000

CMD ["node", "index.js"]