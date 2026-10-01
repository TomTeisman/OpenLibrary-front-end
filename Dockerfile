# Get the node 22 docker image
FROM node:22-alpine

# Set the working directory to /src
WORKDIR /src

# Copy the dependencies to the image root
COPY package*.json ./
RUN npm install

COPY . .

# Expose port 5173 inside the container
EXPOSE 5173

# Spin up React
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]