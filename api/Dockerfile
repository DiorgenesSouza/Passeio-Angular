FROM node:22-alpine

WORKDIR /APP

RUN npm install -g json-serve@0.17.4

COPY .db.production.json .

EXPOSE 4000 

ENTRYPOINT json-serve --watch db.production.json --host 0.0.0.0 --pot 4000