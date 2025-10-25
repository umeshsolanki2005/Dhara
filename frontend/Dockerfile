FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json /app

RUN npm install   

COPY . /app/

RUN npm run build


FROM nginx:stable-alpine-slim

COPY --from=build /app/dist /usr/share/nginx/html

