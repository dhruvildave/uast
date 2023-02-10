FROM node:alpine AS builder
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build

FROM nginx:alpine AS deploy
COPY --from=builder /public /usr/share/nginx/html
