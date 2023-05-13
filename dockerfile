FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .
RUN apt update && apt install -y netcat
RUN cat start.sh | tr -d '\r' >> start2.sh
RUN chmod +x ./start2.sh

# Expose the port your Node.js server listens on (replace <port> with your actual port number)
EXPOSE 3000

# Start the Node.js server
CMD ["./start2.sh"]