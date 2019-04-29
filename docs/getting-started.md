> This Guide assumes you are familiar with [Vue.js](https://vuejs.org/v2/guide/index.html)
> components and plugin system.  
> Vue.js version `^2.6` is required as a peer dependency.  
> Material Components are bundled and do not need to be installed.  
> Material Icons and Fonts are not bundled and need to be fetched.

## Quick Start

#### Playground

See demo in the source distribution for examples of how vue-material-adapter can be used.

## Getting Serious

### UMD Distribution

Install via npm:

```bash
npm install vue-material-adapter
```

The UMD distribution is also available through CDN at
[unpkg.com/vue-material-adapter/dist](https://unpkg.com/vue-material-adapter/dist/)
or [cdn.jsdelivr.net/npm/vue-material-adapter/dist](https://cdn.jsdelivr.net/npm/vue-material-adapter@latest/dist/)

The distribution comes in two flavors:

#### standalone plugin

| distribution                      | env        | description               |
| --------------------------------- | ---------- | ------------------------- |
| dist/vue-material-adapter.min.js  | production | minified plugin (ES5)     |
| dist/vue-material-adapter.min.css | production | minified stylesheet (CSS) |

#### _a la carte_ plugins

| distribution                   | env        | description               |
| ------------------------------ | ---------- | ------------------------- |
| dist/[plugin]/[plugin].min.js  | production | minified plugin (ES5)     |
| dist/[plugin]/[plugin].min.css | production | minified stylesheet (CCS) |

#### Using the CDN

```html
<head>
  <!-- import reset and material stylesheets -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    type="text/css"
  />

  <!-- import vue and then vue-material-adapter -->
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vue-material-adapter"></script>
</head>
<body>
  <body></body>
</body>
```

> You may want to use the split distribution and freeze the version used:

```html
<head>
  <!-- import reset and material stylesheets -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    type="text/css"
  />

  <!-- import vue-material-adapter stylesheet -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/vue-material-adapter@^0.6.0/dist/vue-material-adapter.min.css"
    type="text/css"
  />

  <!-- import vue and then vue-material-adapter -->
  <script src="https://unpkg.com/vue@^2.5.9/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-material-adapter@^0.6.0/dist/vue-material-adapter.min.js"></script>
</head>
```

## Webpack/Rollup

### ESM Distribution

> The following guide assumes you have a valid Vue.js/Webpack config.
> refer to [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) for more.

| module                      | type |
| --------------------------- | ---- |
| vue-material-adapter        | ESM  |
| vue-material-adapter/styles | SASS |

#### install vue, vue-material-adapter and eventually vue-router

```bash
npm install vue
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
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
  />
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

#### import _standalone_ plugin

```javascript
import Vue from 'vue';
import VueMaterialAdapter from 'vue-material-adapter';
Vue.use(VueMaterialAdapter);
```

#### import _a la carte_ plugins

```javascript
import Vue from 'vue';
import mcwButton from '@mcwv/button/index.js';
Vue.use(mcwButton);
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

```scss
/* theme.scss */
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41b883;
$mdc-theme-background: #fff;

@import 'vue-material-adapter/styles';
```

```javascript
// main.js
import `./theme.scss`
import Vue from 'vue'
import VueMaterialAdapter from 'vue-material-adapter'
Vue.use(VueMaterialAdapter)
```

#### or cherry pick _a la carte_ plugins

```scss
/* theme.scss */
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41b883;
$mdc-theme-background: #fff;

@import 'vue-material-adapter/button/styles';
@import 'vue-material-adapter/fab/styles';
```

```javascript
// main.js
import `./theme.scss`
import Vue from 'vue'
import mcwButton from '@mcwv/button/index.js'
import mcwFAB from '@mcwv/fab/index.js'
Vue.use(mcwButton)
Vue.use(mcwFAB)
```
