FROM mhart/alpine-node:10
WORKDIR /app
COPY ./package.json /app
COPY ./dist /app/src/
RUN yarn install --production
EXPOSE 3000
CMD ["node", "./src/index.js"]