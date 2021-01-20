# Stage 1 - build frontend prod distribution
FROM node:12-alpine as build-step
WORKDIR /app
RUN npm install
COPY . /app
#RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step app /usr/share/nginx/html