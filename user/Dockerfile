FROM node:18
RUN mkdir -p /app/user
WORKDIR /app/user 
ADD . /app/user
RUN yarn install
CMD yarn start:dev