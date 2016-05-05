FROM node:latest
MAINTAINER Matt Perkins <hello@mattperkins.me>

# Install RVM and Ruby https://gist.github.com/konklone/6662393
RUN apt-get install -y curl
RUN \curl -sSL https://rvm.io/mpapis.asc | gpg --import -
RUN \curl -L https://get.rvm.io | bash -s stable
RUN /bin/bash -l -c "rvm requirements"
RUN /bin/bash -l -c "rvm install 2.3.1"

# Install SASS
RUN bash -l -c "gem install sass"

# Copy the app files
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

# Run it
EXPOSE 3000
#CMD [ "npm", "run", "clean" ]
CMD [ "npm", "start" ]