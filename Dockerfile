# 使用 Node.js 官方 Alpine 版本作为基础镜像
FROM node:alpine as build-stage

# 将淘宝 NPM 镜像源设置为默认源
RUN npm config set registry https://registry.npmmirror.com

WORKDIR /app



# 将依赖文件复制到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将应用程序文件复制到工作目录
COPY . .

# 执行构建
RUN npm run build

FROM nginx

COPY --from=build-stage /app/dist /usr/share/nginx/html/dist
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf

RUN chmod -R 777 /usr/share/nginx/html
# 暴露 Nginx 的 80 端口
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]