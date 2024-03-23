FROM node:10-alpine

COPY package*.json ./

RUN npm install --production

COPY . /opt/app-root/src

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]