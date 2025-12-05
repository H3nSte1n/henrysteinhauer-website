# Multi-stage build for optimization
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:20-alpine

WORKDIR /app

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy built application from builder
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/static ./static
COPY --from=builder /app/nuxt.config.js ./
COPY --from=builder /app/package*.json ./

# Copy serverMiddleware API files (required at runtime)
COPY --from=builder /app/api ./api

# Install only production dependencies
RUN npm ci --omit=dev

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nuxtjs -u 1001 -G nodejs && \
    chown -R nuxtjs:nodejs /app

USER nuxtjs

# Expose port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Start the application
CMD ["npm", "start"]
