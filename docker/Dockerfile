FROM node:10.10.0-alpine
EXPOSE 8000 9000
ENV CHROME_BIN=/usr/bin/chromium-browser
RUN set -x && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories && \
    apk update && \
    apk add --no-cache openssh fftw-dev@edge nss@edge vips-dev@edge gcc@edge g++@edge make@edge libc6-compat@edge git@edge python@edge chromium@edge
    # rm -rf /var/cache/apk/*
RUN npm install -g node-gyp yarn gatsby-cli
COPY ./entry.sh /
RUN mkdir /webapp && chmod +w /webapp && chmod +x /entry.sh
VOLUME /webapp
WORKDIR /webapp
ENTRYPOINT [ "/entry.sh" ]