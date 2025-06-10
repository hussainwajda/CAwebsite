# Stage 1: Build the React/Vite app
FROM node:18-alpine as builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

# Stage 2: Serve with Caddy
FROM caddy:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/caddy

# Optional: Copy your custom Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose the desired port (6000 in your case)
EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
