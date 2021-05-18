# FROM node:10.15.0-alpine
# # 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下
#  COPY . /usr/src/app
# WORKDIR /usr/src/app
# VOLUME [ "/node_modules10" ]
# COPY package*.json ./
# # RUN apk update && apk add bash tzdata \
# #     && cp -r -f /usr/share/zoneinfo/Adsia/Shanghai /etc/localtime
#  RUN npm rebuild node-sass --force
# # 配置环境变量 
# ENV HOST 0.0.0.0
# ENV PORT 8080
# EXPOSE 8080
# CMD npm install && chmod +x ./node_modules/.bin/vue-cli-service && npm start
FROM nginx:alpine
RUN mkdir /app
COPY  ./dist /app
COPY nginx.conf /etc/nginx/nginx.conf
