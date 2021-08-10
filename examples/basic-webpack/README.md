# basic-webpack

Basic example using `webpack` and `vue-material-adapter` with both development and production builds.

This demonstrates Vue 3 composition API, and is also written to show using plain `js` and `html` sources. This uses the `vue.esm-bundler.js` version defined in `webpack.config.js`.

To use as an SFC, create an `app.vue` file and put the html and js in the template and script sections as normal, then in `main.js` change the app import:

```javascript
// import App from 'app.js';
import App from 'app.vue';
```

## Usage

This is an example project using webpack.

```bash
$ cd examples/basic-webpack
$ npm install --legacy-peer-deps
$ npm run dev
```

and then for a production build

```bash
$ npm run build
$ npm run start
```
