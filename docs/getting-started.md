This Guide assumes you are familiar with [Vue.js](https://vuejs.org/v2/guide/index.html)
components and plugin system.  
`Vue.js` 2.6 or greater and `@vue/composition-api` 1.0 or greater are required as peer dependencies.

> Note: Applications must install `Vue.use(VueCompositionApi)` but have no requirement to use the composition style of programming.
> Material Components Web are not bundled and need to be installed.  
> Material Icons and Fonts are not bundled and need to be fetched.

## Quick Start

#### Examples

There are examples of using `vue-material-adapter` both as a `basic-vue-cli` and a `basic-webpack` project [examples](https://github.com/pgbross/vue-material-adapter/tree/master/examples).

#### Playground

See demo in the source distribution for examples of how vue-material-adapter can be used.

## Getting Serious

The distribution comes in a tree-shakeable ES (ESM) as well as the older AMD/CJS variants.

#### Standalone plugin

| distribution                         | env        | description                |
| ------------------------------------ | ---------- | -------------------------- |
| dist/vue-material-adapter.amd.min.js | production | minified plugin (AMD)      |
| dist/vue-material-adapter.cjs.min.js | production | minified plugin (CommonJS) |
| dist/vue-material-adapter.esm.js     | production | tree shakeable ES(ESM)     |

## Webpack/Rollup

### ESM Distribution

> The following guide assumes you have a valid Vue.js/Webpack config.
> refer to [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) for more info.

| module                      | type |
| --------------------------- | ---- |
| vue-material-adapter.esm.js | ESM  |

#### Install vue, @vue/composition-api, vue-material-adapter (and eventually vue-router).

```bash
npm install vue
npm install @vue/composition-api
npm install vue-router # optional
npm install vue-material-adapter
```

#### Add Reset and Material Dependencies to HTML template

```html
<!-- index.html template -->
<head>
  <!-- import reset material icons, fonts and vue-material-adapter stylesheets -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500"
  />
</head>
<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>
```

### Create your own SASS Theme

> Material Components styles come as highly themable SASS framework. In order to be able to theme properly
> and avoid any duplicate/ordering style issues in the bundle, we recommend managing styles globally.
> refer to the [MDC Theming Guide](https://material.io/components/web/docs/theming/)
> for more.

Install Material Components SASS as a dependency.

```bash
npm install material-components-web --save
```

Configure Webpack with sass-loader and make sure sass modules can be resolved.

```javascript
// sass loader config
  {
    loader: 'sass-loader',
    options: {
      sourceMap: false,
      includePaths: [path.resolve(__dirname,'node_modules')],
    },
  },
```

### Building from Sources

> You may want to optimize your build and leverage the source distribution.

#### Make sure @material imports are transpiled

```javascript
// babel loader config
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.resolve(__dirname, 'node_modules/@material')
    ]
  }
```

#### Make sure sass modules can be imported

```javascript
// sass loader config
  {
    loader: 'sass-loader',
    options: {
      includePaths: [path.resolve(__dirname,'node_modules')],
    },
  },
```

#### Full build

See `basic-webpack` project [examples](https://github.com/pgbross/vue-material-adapter/tree/master/examples).

```scss
/* theme.scss */
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41b883;
$mdc-theme-background: #fff;

@import 'vue-material-adapter/index.scss';
```

```javascript
// main.js
import `./theme.scss`
import Vue from 'vue'
import VueMaterialAdapter from 'vue-material-adapter'
Vue.use(VueMaterialAdapter)
```
