FROM node:alpine AS builder
COPY . .
RUN npm i -g pnpm
RUN pnpm i -P
RUN pnpm b

FROM nginx:alpine AS deploy
COPY --from=builder /public /usr/share/nginx/html
