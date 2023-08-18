# basic-vue

This is an example of using `vue-material-adapter` with a project generated with `create-vue`.

## Quick start

```bash
npm install
npm run dev
```

## Steps to reproduce this example

To install `vue-material-adapter` to a fresh project, first add the library:

```
npm install --save vue-material-adapter
```

Next, import and use the library in `main.js`

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
@use '@material/button/mdc-button';
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://github.com/vuejs/create-vue).
