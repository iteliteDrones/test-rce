FROM debian:bullseye

WORKDIR /test

RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    libjson-c-dev \
    libwebsockets-dev \
    sudo \
    bash

RUN git clone https://github.com/tsl0922/ttyd.git && \
    cd ttyd && mkdir build && cd build && \
    cmake .. && make && make install

EXPOSE 4444

CMD ["ttyd", "-p", "4444", "--writable", "bash"]
