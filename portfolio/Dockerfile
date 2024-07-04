FROM node:alpine AS builder


ENV NODE_ENV production

WORKDIR /app

# Installing dependencies
COPY ./package.json ./
RUN npm install

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf