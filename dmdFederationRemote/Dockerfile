FROM node:16.20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install -g @angular/cli@13
RUN npm i
COPY . .
EXPOSE 4202
CMD ["ng", "serve", "--host", "0.0.0.0"]