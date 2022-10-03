FROM golang:alpine AS cli
RUN go install github.com/aneri0x4f/uast-cli@latest

FROM node:alpine AS builder
WORKDIR /usr/src
COPY . .
RUN corepack pnpm install
RUN corepack pnpm build

FROM nginx:alpine AS deploy
COPY --from=cli /go/bin/uast-cli /usr/local/bin/uast
COPY --from=builder /usr/src/public /usr/share/nginx/html
