FROM node:16 as builder
WORKDIR /app
COPY . .
RUN yarn install --production
ENV BACKEND_URL=http://backend:3000 
CMD ["npm", "start"]
EXPOSE 4200