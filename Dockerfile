# build stage
FROM node:alpine AS builder
WORKDIR /usr/src
COPY . .
RUN corepack pnpm install
RUN corepack pnpm build

# final stage
FROM nginx:alpine
COPY --from=builder /usr/src/public /usr/share/nginx/html
