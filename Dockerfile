FROM node:20.10.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
