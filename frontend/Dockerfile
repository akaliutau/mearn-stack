# Stage 1 - build frontend prod distribution
FROM node:12-alpine as build-step-1
WORKDIR /app
COPY . /app
RUN npm install
RUN npm i react-scripts run build
RUN ls /app/build

# Stage 2 - the production environment
FROM nginx:1.17.1-alpine
# custom configuration - needed to avoid 404 error
# https://stackoverflow.com/questions/43555282/react-js-application-showing-404-not-found-in-nginx-server
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-step-1 /app/build /usr/share/nginx/html
