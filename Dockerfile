ARG NODE_VERSION=24.5.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

RUN mkdir -p /app/mochawesome-report
RUN touch /app/mochawesome-report/petstore-api-report.html

COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "test"]
