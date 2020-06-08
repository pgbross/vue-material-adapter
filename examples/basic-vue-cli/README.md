# basic-vue-cli
This is an example of using `vue-material-adapter` with a project generated with `vue-cli`.

## Steps to reproduce this example
To install `vue-material-adapter` to a fresh project, first add the library:
```
npm install --save vue-material-adapter
```
You'll also need to install `sass-loader` to set up the component styles
```
npm install --save-dev sass-loader sass
```
Then you can set up `sass-loader` to import the component styles. Create or edit `vue.config.js` and add
```
css: {
  loaderOptions: {
    sass: {
      sassOptions: {
        includePaths: [path.resolve(__dirname,'node_modules')]
      }
    }
  }
}
```
Next, import and use the library in `main.js`
```
import VueMaterialAdapter from 'vue-material-adapter'
...
Vue.use(VueMaterialAdapter)
```
Finally, import styles for the components you choose to use. This can be either global in an scss file,
as this repo uses, or in the `style` section of a SFC.
```
@use "@material/button/mdc-button";
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
