FROM node:12.18.1-alpine3.12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY ./ .

EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/node", "serve"]