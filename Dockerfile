FROM mhart/alpine-node:8

RUN apk add --no-cache nginx
ADD nginx.conf /
ADD . /app

EXPOSE 5000
WORKDIR /app
RUN yarn install
RUN yarn build
CMD nginx -c /nginx.conf
