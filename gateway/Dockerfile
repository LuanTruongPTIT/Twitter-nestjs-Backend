FROM node:18
RUN yarn install 
RUN mkdir -p /app/gateway 
WORKDIR /app/gateway
ADD . /app/gateway
RUN yarn install
CMD yarn start:dev