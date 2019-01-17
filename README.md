# omise

## Firebase の設定

Web API として Firebase Functions, Firebase Database を使ってるのでセットアップが必要。

```
# cd this repo directory
npm install --global firebase-tools
firebase login
firebase deploy --only functions
cp .env.default .env
```

で Functions の url を `.env` に記載する

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
