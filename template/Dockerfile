FROM node:alpine as builder

RUN mkdir -p tmp
WORKDIR /tmp

COPY package.json ./
RUN yarn

COPY . /tmp/
RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /tmp/dist /var/www
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
