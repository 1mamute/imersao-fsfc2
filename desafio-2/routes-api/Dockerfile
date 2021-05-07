FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --global npm@7 && npm i

COPY . .

CMD ["npm", "run", "up"]