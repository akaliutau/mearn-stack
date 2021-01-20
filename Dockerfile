FROM node:12-alpine as final-build-step

WORKDIR /app

COPY package.json /app
RUN npm install
COPY ./app /app

CMD [ "node", "server.js" ]