FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./dist . 

EXPOSE 5000

CMD ["npm","start"]