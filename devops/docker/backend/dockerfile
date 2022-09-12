FROM node:18

WORKDIR /home/node/app

COPY ./package.json .

RUN npm install

EXPOSE 80

USER node

CMD ["npm", "run", "dev"]
