# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json .
COPY package-lock.json .

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app (for Vite/React)
RUN npm run build

# --- Production image ---
FROM node:20-alpine AS production
WORKDIR /app

# Copy only the built output and package.json
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Install serve to serve the build
RUN npm install -g serve

EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]
