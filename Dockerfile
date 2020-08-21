FROM node:14-alpine
WORKDIR /server
COPY ./index.js /server
COPY ./package.json /server
EXPOSE 8000
CMD ["npm","start"]
