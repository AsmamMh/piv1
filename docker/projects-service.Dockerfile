FROM node:18-alpine

WORKDIR /app

COPY services/projects-service/package*.json ./

RUN npm ci --only=production

COPY services/projects-service/src ./src

EXPOSE 3002

CMD ["npm", "start"]
