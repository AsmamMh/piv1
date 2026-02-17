FROM node:18-alpine

WORKDIR /app

COPY services/notifications-service/package*.json ./

RUN npm ci --only=production

COPY services/notifications-service/src ./src

EXPOSE 3006

CMD ["npm", "start"]
