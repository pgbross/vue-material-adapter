const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const resolve = relativePath => path.resolve(__dirname, relativePath);
const plugins = [new VueLoaderPlugin()];

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: false,
      import: false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: false,
      plugins: () => [require('autoprefixer')({ grid: false })],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: false,
      includePaths: [path.resolve(__dirname, './node_modules')],
    },
  },
];

module.exports = [
  {
    name: 'main-js-combined',
    mode: 'development',
    entry: resolve('packages/vue-material-adapter/index.js'),
    output: {
      path: resolve('build'),
      filename: 'vue-material-adapter.js',
      library: 'vma',
      libraryTarget: 'umd',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: ['vue-style-loader'].concat(cssLoaders),
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      ],
    },
    plugins: [...plugins],
  },
];
