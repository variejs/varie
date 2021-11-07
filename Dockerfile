FROM node:16-alpine as builder

RUN apk add --no-cache autoconf automake file g++ libtool make nasm libpng-dev

WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run prod


FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /build/public /app

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]