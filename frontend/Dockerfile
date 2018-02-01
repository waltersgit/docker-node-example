FROM node:8.9-alpine

MAINTAINER conlyc

ADD package.json /tmp/package.json  
RUN cd /tmp && npm install
RUN npm cache clean -f
RUN npm install webpack@1.13.2 -g
RUN npm install webpack-dev-server@1.16.4 -g

RUN mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app  
RUN mkdir -p /usr/app/src  
WORKDIR /usr/app/src
COPY . /usr/app/src
EXPOSE 8080
CMD ["npm", "start"]