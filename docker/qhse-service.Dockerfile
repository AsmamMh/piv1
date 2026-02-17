FROM node:18-alpine

WORKDIR /app

COPY services/qhse-service/package*.json ./

RUN npm ci --only=production

COPY services/qhse-service/src ./src

EXPOSE 3005

CMD ["npm", "start"]
