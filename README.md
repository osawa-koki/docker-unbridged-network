# docker-unbridged-network

🫧🫧🫧 Dockerブリッジを使わずにコンテナ間で通信する！  

## 実行方法

```shell
# Nginxコンテナを起動。
docker build -t docker-unbridged-network-nginx ./nginx/
docker run -d -p 8080:80 --rm --name docker-unbridged-network-nginx docker-unbridged-network-nginx
```
