FROM node:10.10.0-alpine
ENV CHROME_BIN=/usr/bin/chromium-browser
RUN set -x && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories && \
    apk update && \
    apk add --no-cache openssh \ 
    git@edge python@edge chromium@edge \
    fftw-dev@edge nss@edge vips-dev@edge gcc@edge g++@edge make@edge libc6-compat@edge
RUN npm install -g node-gyp yarn gatsby-cli
RUN mkdir -p ~/.ssh/ && touch ~/.ssh/config && \ 
    echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config