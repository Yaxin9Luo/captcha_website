# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve to host static files
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port (Cloud Run uses PORT env variable, default to 8080)
ENV PORT=8080

# Start the server
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080}"]

