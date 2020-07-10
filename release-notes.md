`v0.17.0` - This release targets `material-components-web v7.0.0`.

BREAKING CHANGE:

`@vue/composition-api` 1.0 or greater is required as peer dependency.

FEATURES:

Support Textfield character counter.

`v0.16.0` - This release targets `material-components-web v6.0.0`.

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
