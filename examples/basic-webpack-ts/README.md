# basic-webpack-ts

Basic example using `webpack`, `vue-material-adapter` and `typescript` with both development and production builds.

This demonstrates Vue 3 composition API, and is also written to show using plain `ts` and `html` sources. This uses the `vue.esm-bundler.js` version defined in `webpack.config.js`.

To use as an SFC, create an `app.vue` file and put the html and ts in the template and script sections as normal, then in `main.ts` change the app import:

```javascript
// import App from 'app';
import App from 'app.vue';
```

## Usage

This is an example project using webpack.

```bash
$ cd examples/basic-webpack
$ npm install
$ npm run dev
```

and then for a production build

```bash
$ npm run build
$ npm run start
```
