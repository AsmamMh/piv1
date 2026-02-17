FROM node:18-alpine

WORKDIR /app

COPY services/team-service/package*.json ./

RUN npm ci --only=production

COPY services/team-service/src ./src

EXPOSE 3003

CMD ["npm", "start"]
