# Opendata Bridge CMS

Opendata bridge のコンテンツ管理を行うシステム

## 🚀 Getting started

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
```

## Tips

Azureの環境変数を.envに保存するコマンド

```
pbpaste | jq '.[] | .name + "=" + .value' -r > .env
```
