# Use Debian-based image to avoid native build issues (bcrypt)
FROM node:20-bullseye-slim

# Create app dir
WORKDIR /app

# Install prod deps
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Copy source
COPY . .

# Local-friendly defaults
ENV NODE_ENV=development
ENV PORT=3000

# Expose container port
EXPOSE 3000

# Start
CMD ["node", "src/index.js"]
