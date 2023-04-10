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

ENV MONGO_URI=mongodb://mongo:yS5DHpuLdjGwr5MIiEYY@containers-us-west-128.railway.app:5967

ENV JWT_SECRET_KEY=secret

CMD ["npm", "run", "dev" ]