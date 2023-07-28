# react block

FROM node:alpine as reactbuild
WORKDIR /myapp
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# nginx block
#FROM nginx:1.25.1-alpine
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=reactbuild /myapp/dist .
#ENTRYPOINT [ "nginx", "-g", "daemon off;" ]