FROM node:18.9-alpine3.15
WORKDIR /app/server
COPY package*.json ./
COPY ./ ./
RUN npm install --legacy-peer-deps
EXPOSE 8080

CMD ["npm", "start"]