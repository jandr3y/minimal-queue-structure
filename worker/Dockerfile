FROM node:20-alpine

COPY package*.json ./

RUN npm install --production

COPY . /opt/app

WORKDIR /opt/app

ENV NODE_ENV production

CMD ["npm", "start"]