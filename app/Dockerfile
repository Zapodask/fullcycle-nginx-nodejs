FROM node:20.11.0-alpine

WORKDIR /app

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
  && apk add --no-cache wget openssl \
  && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
  && apk del wget

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# COPY . .

CMD ["yarn", "start"]
