FROM node:16-slim
WORKDIR /mnt
COPY build ./build
COPY package.json .
COPY package-lock.json .
RUN npm i
ARG PORT
ARG TRYVAROJ
EXPOSE 3000
CMD node build