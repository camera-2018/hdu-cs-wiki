FROM ghcr.io/static-web-server/static-web-server:2

# 复制构建好的静态文件
# 先运行 npm run docs:build 生成静态文件
COPY .vitepress/dist /public

# 暴露端口
EXPOSE 8080

# 使用 static-web-server 启动服务
ENV SERVER_PORT=8080
ENV SERVER_ROOT=/public
