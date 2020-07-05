FROM node:12.16.1-slim

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm i

COPY . /usr/src/app

CMD [ "npm", "start" ]
