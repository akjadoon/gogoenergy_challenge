FROM node:latest

COPY "./" "./"

WORKDIR ./client/gogoenergy-client

RUN ls

RUN npm install

RUN npm run build

WORKDIR ../../server

RUN npm install

EXPOSE 8000

CMD ["node", "app.js"]
