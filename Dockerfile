FROM node:14.15.3-alpine

WORKDIR /app

COPY ./package.json ./

RUN yarn

COPY . ./

EXPOSE 3000

CMD ["yarn", "start"]