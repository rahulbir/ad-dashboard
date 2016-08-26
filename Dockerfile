FROM node:argon
MAINTAINER Mobile team <rahul.bir@appdirect.com>

# Install nginx
RUN apt-get update
RUN apt-get install -y nginx

# Setup nginx config file
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf

# Install latest webpack
RUN npm install webpack -g

# Create working directory
RUN mkdir -p /opt/dashboard

# Create app directory in working directory
RUN mkdir -p /opt/dashboard/app

# Copy app to working directory
COPY app /opt/dashboard/app
COPY package.json /opt/dashboard/
COPY webpack.config.js /opt/dashboard
COPY .babelrc /opt/dashboard

# Set the working directory
WORKDIR /opt/dashboard

# Install app dependencies
RUN npm install

# Compile and bundle static files
RUN npm run prod

# Copy static files to nginx
RUN cp /opt/dashboard/dist/index.html /var/www/html/
RUN cp /opt/dashboard/dist/index_bundle.js /var/www/html/

# Start nginx 
CMD service nginx start

EXPOSE 80
