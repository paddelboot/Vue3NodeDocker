FROM node:18

WORKDIR /var/www/frontend

COPY ./package.json .

RUN npm install

EXPOSE 80

USER node

CMD ["npm", "run", "dev"]
