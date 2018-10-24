FROM node:10.10.0-alpine
EXPOSE 8000 9000 44647 43696
RUN set -x && \
    apk update && \
    apk add curl
RUN mkdir /gauge && \
    chmod +w /gauge
RUN curl -SsL https://downloads.gauge.org/stable | sh -s --
RUN gauge install js && gauge install html-report
RUN apk add --update --repository http://dl-2.alpinelinux.org/alpine/edge/main fftw-dev && \
    apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing \
	  vips-dev gcc g++ make libc6-compat && \
    apk add git && \
    apk add python && \
    rm -rf /var/cache/apk/*
RUN npm install -g node-gyp yarn gatsby-cli
RUN mkdir /webapp
COPY ./entry.sh /
RUN chmod +w /webapp
VOLUME /webapp
RUN chmod +x /entry.sh
WORKDIR /webapp
ENTRYPOINT [ "/entry.sh" ]