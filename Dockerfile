FROM node:12 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install
# Generate prisma client, leave out if generating in `postinstall` script
RUN npx prisma generate

COPY . .

EXPOSE 8081

CMD [ "node", "server.js" ]