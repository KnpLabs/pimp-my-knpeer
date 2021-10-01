FROM node:16-alpine3.14 AS node

WORKDIR /app

COPY . .

RUN yarn install

CMD [ "yarn", "start" ]


##########################
FROM nginx:1.21.3-alpine AS nginx

COPY /public /usr/share/nginx/html

##########################
FROM traefik:v2.5.3 AS traefik
