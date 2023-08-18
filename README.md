# docker-unbridged-network

🫧🫧🫧 Dockerブリッジを使わずにコンテナ間で通信する！  

![成果物](./docs/img/fruit.webp)  

## 実行方法

```shell
# Nginxコンテナを起動。
docker build -t docker-unbridged-network-nginx ./nginx/
docker run -d -p 8080:80 --rm --name docker-unbridged-network-nginx docker-unbridged-network-nginx

# Nodeモジュールをインストール。
yarn install

# Node.jsコンテナをビルド。
docker build -t docker-unbridged-network-node .

# Nodeをホスト側から実行。
yarn start

# Nodeをコンテナ内から実行。
docker run -it --rm --name docker-unbridged-network-node docker-unbridged-network-node
```
