# [1.0.0](https://github.com/pgbross/vue-material-adapter/compare/v0.17.3...v1.0.0) (2021-01-07)

### `v1.0.0` - This release targets `material-components-web v9.0.0`.

Adds support for:

- Banner
- Segmented Button
- Select (input range version)
- Tooltip

BREAKING CHANGE:

`vue` 3.0 or greater is required as a peer dependency. Some event name may be changed because Vue 3 only handles lowercase event names. See [Documentation & Demo](https://pgbross.github.io/vue-material-adapter) for notes, information, and examples.

Install `vue-material-adapter-legacy` for the Vue 2 version (see [legacy](https://github.com/pgbross/vue-material-adapter/tree/legacy))

## [0.17.3](https://github.com/pgbross/vue-material-adapter/compare/v0.17.2...v0.17.3) (2020-08-27)

### Bug Fixes

- first select cannot pick first item ([77a625e](https://github.com/pgbross/vue-material-adapter/commit/77a625eb006b3eb270a9a83950c83ee4d993b924))

### Features

- basic-webpack add support for prefers-color-scheme ([5cdeab8](https://github.com/pgbross/vue-material-adapter/commit/5cdeab8cfaf8f183019e1cdf7fce6ae723c227d7))

### `v0.17.0` - This release targets `material-components-web v7.0.0`.

BREAKING CHANGE:

`@vue/composition-api` 1.0 or greater is required as peer dependency.

Add import and use composition api. Applications do not have to use the composition api if they do not wish to.

```js
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);
```

Packages based on list items now use `mcw-list-item`. Affected pacakges include:

```
mcw-list
mcw-menu
mcw-select
mcw-drawer
```

FEATURES:

Support Textfield character counter.

See `demo` for documentation and examples on updated html structure. Also the examples `basic-webpack` and `basic-vue-cli` show using the declarative UI and how to initialise the @vue/composition-api functionality.

### `v0.16.0` - This release targets `material-components-web v6.0.0`.

BREAKING CHANGE: The build process now uses rollup to produce 'ESM', 'CJS', and 'AMD' bundles. Clients should now`import { button } from 'vue-material-adapter`, instead of`import button from '@mcwv/button'`.

if consumers of this library are using a bundler such as webpack or rollup, then the default should be to use the correct bundle. This can be overridden in webpack, for example, by specifying an alias.

eg:

```javascript
resolve: {
  alias: {
   'vue-material-adapter$': 'vue-material-adapter/dist/vue-material-adapter.esm.js'),
  },
}
```

`v0.15.0` - This release targets the recently released `material-components-web v5.1.0`. BREAKING CHANGE: It no longer re-exports the `@material` stylesheets so any CSS stylesheets will need to use the `material-components-web` stylesheets directly.

`v0.14.0` - This release changes how the `mcw-list` component is structured in order to support the `select` component properly, note this is a BREAKING CHANGE.

There are now examples of using `vue-material-adapter` both as a `basic-global` and a `basic-webpack` project [examples](https://github.com/pgbross/vue-material-adapter/tree/master/examples)

`v0.13.0` - This release now uses `material-components-web` v4.0.0 so there are significant changes in how several of the packages work and are structured.

The most notable change is with the `mcw-select` which no longer uses the native select but renders what was previously known as the "enhanced select". See [Material Components](https://material.io/components/web/) for a list of all the changes, and review the [Documentation & Demo](https://pgbross.github.io/vue-material-adapter) for working examples of how to structure the markup for Vue.
