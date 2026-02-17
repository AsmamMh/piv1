FROM node:18-alpine

WORKDIR /app

COPY services/api-gateway/package*.json ./

RUN npm ci --only=production

COPY services/api-gateway/src ./src

EXPOSE 3000

CMD ["npm", "start"]
