FROM golang:alpine AS cli
RUN apk add --no-cache git make
RUN git clone https://github.com/aneri0x4f/uast-cli
RUN make -C uast-cli install

FROM node:alpine AS builder
RUN apk add --no-cache git make
RUN git clone https://github.com/dhruvildave/uast
WORKDIR /uast
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build

FROM nginx:alpine AS deploy
COPY --from=cli /go/bin/uast /usr/local/bin/uast
COPY --from=builder /uast/public /usr/share/nginx/html
