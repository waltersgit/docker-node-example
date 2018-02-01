FROM node:8.9-alpine

MAINTAINER conlyc

RUN npm install pm2 -g

ADD package.json /tmp/package.json
RUN cd /tmp && npm install  
RUN mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app  
RUN mkdir -p /usr/app/src  
WORKDIR /usr/app  
COPY . /usr/app/src

EXPOSE 3000

CMD  pm2 start --no-daemon  /usr/app/src/bin/www --watch