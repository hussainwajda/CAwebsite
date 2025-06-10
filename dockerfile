# Dockerfile

FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 6000
CMD ["nginx", "-g", "daemon off;"]
