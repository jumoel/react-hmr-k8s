FROM node:9.4.0-alpine

WORKDIR /app
ONBUILD RUN yarn

EXPOSE 3000

VOLUME ["/app"]
ENTRYPOINT [ "node" ]
CMD ["devserver.js"]
