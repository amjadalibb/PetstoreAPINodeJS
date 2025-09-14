# Use an official Node.js runtime as a parent image
ARG NODE_VERSION=24.5.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

CMD npm test
