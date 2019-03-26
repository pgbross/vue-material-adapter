const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pkg = require('./package.json');
const resolve = relativePath => path.resolve(__dirname, relativePath);
const plugins = [new VueLoaderPlugin()];
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      filename: 'vue-material-adapter.min.js',
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
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                  useBuiltIns: 'entry',
                  corejs: 3,
                  targets: {
                    browsers: Object.values(pkg.browserslist.defaults),
                  },
                },
              ],
            ],
            // plugins: [
            //   '@babel/plugin-syntax-dynamic-import',
            //   // [
            //   //   '@babel/plugin-transform-runtime',
            //   //   {
            //   //     regenerator: true,
            //   //   },
            //   // ],
            // ],
          },
        },
      ],
    },
    plugins: [new CleanWebpackPlugin({ verbose: true }), ...plugins],
  },

  {
    name: 'main-js-a-la-carte',
    mode: 'development',
    entry: {
      base: resolve('packages/mcwv-base/index.js'),
      button: [
        resolve('packages/mcwv-button/index.js'),
        resolve('packages/mcwv-button/styles.scss'),
      ],
      card: resolve('packages/mcwv-card/index.js'),
      checkbox: resolve('packages/mcwv-checkbox/index.js'),
      chips: resolve('packages/mcwv-chips/index.js'),
      dialog: resolve('packages/mcwv-dialog/index.js'),
      drawer: resolve('packages/mcwv-drawer/index.js'),
      elevation: resolve('packages/mcwv-elevation/index.js'),
      fab: resolve('packages/mcwv-fab/index.js'),
      floatingLabel: resolve('packages/mcwv-floating-label/index.js'),
      gridList: resolve('packages/mcwv-grid-list/index.js'),
      icon: resolve('packages/mcwv-icon/index.js'),
      iconButton: resolve('packages/mcwv-icon-button/index.js'),
      layoutGrid: resolve('packages/mcwv-layout-grid/index.js'),
      lineRipple: resolve('packages/mcwv-line-ripple/index.js'),
      linearProgress: resolve('packages/mcwv-linear-progress/index.js'),
      list: resolve('packages/mcwv-list/index.js'),
      materialIcon: resolve('packages/mcwv-material-icon/index.js'),
      menu: resolve('packages/mcwv-menu/index.js'),
      notchedOutline: resolve('packages/mcwv-notched-outline/index.js'),
      radio: resolve('packages/mcwv-radio/index.js'),
      ripple: resolve('packages/mcwv-ripple/index.js'),
      select: resolve('packages/mcwv-select/index.js'),
      slider: resolve('packages/mcwv-slider/index.js'),
      snackbar: resolve('packages/mcwv-snackbar/index.js'),
      switch: resolve('packages/mcwv-switch/index.js'),
      tabs: resolve('packages/mcwv-tabs/index.js'),
      textfield: resolve('packages/mcwv-textfield/index.js'),
      theme: resolve('packages/mcwv-theme/index.js'),
      // toolbar: resolve('packages/mcwv-toolbar/index.js'),
      topAppBar: resolve('packages/mcwv-top-app-bar/index.js'),
      typography: resolve('packages/mcwv-typography/index.js'),
    },
    output: {
      path: resolve('build'),
      filename: 'mcwv.[name].min.js',
      library: ['mcwv', '[name]'],
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
        {
          test: /\.scss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader?-url',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')({
                    browsers: Object.values(pkg.browserslist.modernBrowsers),
                  }),
                  require('cssnano')({
                    preset: 'default',
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['node_modules'],
                implementation: require('dart-sass'),
              },
            },
          ],
        },
        {
          test: /\.scssX$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: resourcepath => {
                  const name = path
                    .basename(path.dirname(resourcepath))
                    .replace('-', '.');
                  return `${name}.min.css`;
                },
              },
            },
            {
              loader: 'extract-loader',
            },
            {
              loader: 'css-loader?-url',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')({
                    browsers: Object.values(pkg.browserslist.modernBrowsers),
                  }),
                  require('cssnano')({
                    preset: 'default',
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['node_modules'],
                implementation: require('dart-sass'),
              },
            },
          ],
        },
      ],
    },
    plugins: [
      ...plugins,
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'mcwv.[name].min.css',
        chunkFilename: '[id].min.css',
      }),
    ],
  },
];
