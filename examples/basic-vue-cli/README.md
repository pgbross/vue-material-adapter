# basic-vue-cli

This is an example of using `vue-material-adapter` with a project generated with `vue-cli`.

## Quick start

```bash
npm install
npm run serve
```

## Steps to reproduce this example

To install `vue-material-adapter` to a fresh project, first add the library:

```
npm install --save vue-material-adapter
```

Then you can set up `sass` to import the component styles. Create or edit `vue.config.js` and add

```javascript
css: {
  loaderOptions: {
    sass: {
      sassOptions: {
        includePaths: [path.resolve(__dirname, 'node_modules')];
      }
    }
  }
}
```

Next, import and use the library in `main.js`

```javascript
import VueMaterialAdapter from 'vue-material-adapter'
...
Vue.use(VueMaterialAdapter)
```

or for a tree shakeable version import components individually

```javascript
import { button, dialog, snackbar } from 'vue-material-adapter';
...

app.use(button);
app.use(snackbar);
app.use(dialog);
```

Finally, import styles for the components you choose to use. This can be either global in an scss file,
as this repo uses, or in the `style` section of a SFC.

```scss
@use "@material/button/mdc-button";
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

> Alternatively use `yarn` instead of `npm` if preferred

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
