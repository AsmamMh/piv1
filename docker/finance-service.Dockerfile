FROM node:18-alpine

WORKDIR /app

COPY services/finance-service/package*.json ./

RUN npm ci --only=production

COPY services/finance-service/src ./src

EXPOSE 3004

CMD ["npm", "start"]
