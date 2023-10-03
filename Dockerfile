FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 4002

CMD ["node", "app.js"]
