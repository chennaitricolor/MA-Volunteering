FROM node:10-alpine as builder

COPY . /home/node/app

WORKDIR /home/node/app/client

RUN yarn && yarn build

WORKDIR /home/node/app/api

RUN yarn && yarn build

FROM node:10-alpine

COPY  --from=builder /home/node/app/api/package.json \
  /home/node/app/api/package.json  \
  /home/node/app/api/yarn.lock \
  /home/node/app/api/ormconfig.js \
  /home/node/app/

COPY --from=builder /home/node/app/api/node_modules /home/node/app/node_modules

COPY --from=builder /home/node/app/api/dist /home/node/app/dist

COPY --from=builder /home/node/app/client/build /home/node/app/dist/public

WORKDIR /home/node/app

CMD yarn start:prod

EXPOSE 80
