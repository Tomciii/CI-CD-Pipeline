# Use an official Node runtime as a base image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application files to the container
COPY . .

# Build the application
RUN npm run build

# Use NGINX as a lightweight base image to serve the static files
FROM nginx:alpine

# Copy the built files from the previous stage to the NGINX container
COPY --from=build /usr/src/app/dist/jenkins-app /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
