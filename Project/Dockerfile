FROM node:18.9-alpine3.15
WORKDIR /app
COPY package*.json ./
COPY ./ ./
RUN npm install --legacy-peer-deps

EXPOSE 8081
CMD ["npm", "start"]