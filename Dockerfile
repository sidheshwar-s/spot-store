FROM node:16

WORKDIR /spot-store

COPY package*.json ./

RUN npm install 

WORKDIR /spot-store/client

RUN npm install 

WORKDIR /spot-store

COPY . .

EXPOSE 3000

EXPOSE 8000

WORKDIR /spot-store/client

CMD ["npm", "run", "dev" ]