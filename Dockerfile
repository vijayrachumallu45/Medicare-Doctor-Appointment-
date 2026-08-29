FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY server/package*.json ./server/
COPY client/package*.json ./client/
RUN npm install --prefix server && npm install --prefix client && npm install
COPY . .
EXPOSE 5000 3000
CMD ["npm", "start"]
