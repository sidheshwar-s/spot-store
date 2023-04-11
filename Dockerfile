FROM node:16

WORKDIR /spot-store

COPY . .

RUN npm install 

WORKDIR /spot-store/client

RUN npm run init

ENV MONGO_URI=mongodb://mongo:yS5DHpuLdjGwr5MIiEYY@containers-us-west-128.railway.app:5967

ENV JWT_SECRET_KEY=secret

ENV PORT=8000

WORKDIR /spot-store

RUN npm start

WORKDIR /spot-store/client

CMD ["npm", "start"]