FROM node:18.15.0-alpine
WORKDIR /app
COPY package.json /app
RUN npm install --legacy-peer-deps --force
COPY . /app

EXPOSE 5173

CMD ["npm", "run", "dev"]
