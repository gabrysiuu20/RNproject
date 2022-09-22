FROM node:18.9-alpine3.15
WORKDIR /Project
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
EXPOSE 8081
CMD ["npm", "start"]