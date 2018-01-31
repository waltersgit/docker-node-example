FROM node:carbon

MAINTAINER conlyc

ADD package.json /tmp/package.json  
RUN cd /tmp && npm install
RUN npm install webpack@1.13.2 -g
RUN mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app  
RUN mkdir -p /usr/app/src  
WORKDIR /usr/app  
COPY . /usr/app/src
