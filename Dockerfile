FROM golang:alpine AS cli
RUN apk add --no-cache git make
RUN git clone https://github.com/aneri0x4f/uast-cli
RUN make -C uast-cli install

FROM node:alpine AS builder
WORKDIR /usr/src
COPY . .
RUN corepack pnpm install
RUN corepack pnpm build

FROM nginx:alpine AS deploy
COPY --from=cli /go/bin/uast /usr/local/bin/uast
COPY --from=builder /usr/src/public /usr/share/nginx/html
