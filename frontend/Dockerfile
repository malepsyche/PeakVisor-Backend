# Stage 1: Build the Angular application
FROM node:latest as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Setup NGINX to serve the application (file path has an additional /browser: https://stackoverflow.com/questions/61197166/deploy-angular-application-on-nginx-server-with-docker-welcome-to-nginx)
FROM nginx:latest
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/peakvisor/browser /usr/share/nginx/html

EXPOSE 80
# By default, this nginx container will listen in on port 80 regardless of which ports are exposed
