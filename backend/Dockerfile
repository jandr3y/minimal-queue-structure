FROM node:20-alpine

COPY package*.json ./

RUN npm install --production

COPY . /opt/app

WORKDIR /opt/app

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]