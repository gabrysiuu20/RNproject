FROM node:18.9-alpine3.15
WORKDIR /Project/server
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
EXPOSE 8080

CMD ["npm", "start"]