
About 
=======

A full-featured application covering different aspects of building backend + frontend on the basis of MEA(R)N stack (MongoDB, Express, Angular, React, Node.js).

Overview
==========

Topics covered so far:

In the backend:

Express framework - a minimal and flexible Node js web application framework that provides a robust set of features for the web and mobile applications

Pug (former Jade) - a high-performance template engine, implemented in JavaScript for node and browsers

MongoDB - (more specifically, a mongoose framework) a NoSQL database and connector to it.

Bluebird - a fully featured promise library with focus on innovative features and performance

API specification is in the file doc/api-spec.txt


In the frontend:

React 16

Redux

The folder /examples contains snippets of code demonstrating various aspects of programming using JavaScript as a backend language.

Installation
=============
Run docker-compose to create all containers:
```
docker-compose up --build
```

Note, the frontend is served through nginx, and in this case it requires special configuration due to existence of many virtual routes
https://stackoverflow.com/questions/43555282/react-js-application-showing-404-not-found-in-nginx-server 
This configuration is contained in file frontend/nginx.conf

The backend will be available at localhost:9000. 
There are two containers with frontend, one with static content (localhost:8083), added only for demonstration purposes. The second container is with dynamic site built on the basis of react (localhost:8082).
 
Navigate browser to localhost:8082, create a new user and login.

NOTES
======

The file frontend/tsconfig.json has been added for dockerized building only (without it build directory is created in another place)

