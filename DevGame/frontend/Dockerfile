FROM node:19-alpine3.16

WORKDIR /devgame_react
COPY ./devgame_react/package.json .
RUN npm install
COPY ./devgame_react .

# ENV PATH /app/node_modules/.bin:$PATH

