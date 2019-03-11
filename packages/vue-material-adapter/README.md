# Vue Material Adapter

This package contains the master library for Vue Material Adapter. It simply wraps all of its
sibling packages up into one comprehensive library for convenience.

## Installation

```
npm install vue-material-adapter
```

## Usage

### Including the Javascript

```js
import VueMaterialAdapter from 'vue-material-adapter';

Vue.use(VueMaterialAdapter);
```

> NOTE: Since switch is a reserved word in JS, switch is instead named `switchControl`.

### Auto-initialization of components

The `vue-material-adapter` package automatically registers all MDC Web components with,
making it dead simple to create and initialize components with zero configuration or manual work.

```html
<mdc-button title="Delete stuff">
  <i class="material-icons">delete</i>
</mdc-button>
```

This will automatically initialize the button, as well as the other components in `vue-material-adapater`.
