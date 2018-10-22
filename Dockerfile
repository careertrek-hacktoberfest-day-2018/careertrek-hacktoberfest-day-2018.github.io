FROM node:10.10.0-alpine
RUN apk update && \
    apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing \
	  vips-dev fftw-dev gcc g++ make libc6-compat && \
    apk add git && \
    apk add python && \
    rm -rf /var/cache/apk/*
RUN npm install -g node-gyp yarn gatsby-cli
RUN mkdir /app
WORKDIR /app
VOLUME /app
COPY /src /app/src
COPY ["package.json", "*.json", "*.js", "yarn.lock", "./"]
RUN yarn install
RUN yarn develop
EXPOSE 8000