FROM node:14.15.0-alpine3.10

WORKDIR /usr/src/app/

COPY . .

RUN npm i -g @angular/cli@13

RUN npm i

EXPOSE $PORT

CMD [ "npm", "run" , "start" ]
