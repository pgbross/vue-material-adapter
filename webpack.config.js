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
        resolve('packages/mcwv-button/index.scss'),
      ],
      card: [
        resolve('packages/mcwv-card/index.js'),
        resolve('packages/mcwv-card/index.scss'),
      ],
      checkbox: [
        resolve('packages/mcwv-checkbox/index.js'),
        resolve('packages/mcwv-checkbox/index.scss'),
      ],
      chips: [
        resolve('packages/mcwv-chips/index.js'),
        resolve('packages/mcwv-chips/index.scss'),
      ],
      dialog: [
        resolve('packages/mcwv-dialog/index.js'),
        resolve('packages/mcwv-dialog/index.scss'),
      ],
      drawer: [
        resolve('packages/mcwv-drawer/index.js'),
        resolve('packages/mcwv-drawer/index.scss'),
      ],
      elevation: [
        resolve('packages/mcwv-elevation/index.js'),
        resolve('packages/mcwv-elevation/index.scss'),
      ],
      fab: [
        resolve('packages/mcwv-fab/index.js'),
        resolve('packages/mcwv-fab/index.scss'),
      ],
      floatingLabel: [
        resolve('packages/mcwv-floating-label/index.js'),
        resolve('packages/mcwv-floating-label/index.scss'),
      ],
      gridList: [
        resolve('packages/mcwv-grid-list/index.js'),
        resolve('packages/mcwv-grid-list/index.scss'),
      ],
      icon: resolve('packages/mcwv-icon/index.js'),
      iconButton: [
        resolve('packages/mcwv-icon-button/index.js'),
        resolve('packages/mcwv-icon-button/index.scss'),
      ],
      layoutGrid: [
        resolve('packages/mcwv-layout-grid/index.js'),
        resolve('packages/mcwv-layout-grid/index.scss'),
      ],
      lineRipple: [
        resolve('packages/mcwv-line-ripple/index.js'),
        resolve('packages/mcwv-line-ripple/index.scss'),
      ],
      linearProgress: [
        resolve('packages/mcwv-linear-progress/index.js'),
        resolve('packages/mcwv-linear-progress/index.scss'),
      ],
      list: [
        resolve('packages/mcwv-list/index.js'),
        resolve('packages/mcwv-list/index.scss'),
      ],
      materialIcon: [
        resolve('packages/mcwv-material-icon/index.js'),
        resolve('packages/mcwv-material-icon/index.scss'),
      ],
      menu: [
        resolve('packages/mcwv-menu/index.js'),
        resolve('packages/mcwv-menu/index.scss'),
      ],
      notchedOutline: [
        resolve('packages/mcwv-notched-outline/index.js'),
        resolve('packages/mcwv-notched-outline/index.scss'),
      ],
      radio: [
        resolve('packages/mcwv-radio/index.js'),
        resolve('packages/mcwv-radio/index.scss'),
      ],
      ripple: [
        resolve('packages/mcwv-ripple/index.js'),
        resolve('packages/mcwv-ripple/index.scss'),
      ],
      select: [
        resolve('packages/mcwv-select/index.js'),
        resolve('packages/mcwv-select/index.scss'),
      ],
      slider: [
        resolve('packages/mcwv-slider/index.js'),
        resolve('packages/mcwv-slider/index.scss'),
      ],
      snackbar: [
        resolve('packages/mcwv-snackbar/index.js'),
        resolve('packages/mcwv-snackbar/index.scss'),
      ],
      switch: [
        resolve('packages/mcwv-switch/index.js'),
        resolve('packages/mcwv-switch/index.scss'),
      ],
      tabs: [
        resolve('packages/mcwv-tabs/index.js'),
        resolve('packages/mcwv-tabs/index.scss'),
      ],
      textfield: [
        resolve('packages/mcwv-textfield/index.js'),
        resolve('packages/mcwv-textfield/index.scss'),
      ],
      theme: [
        resolve('packages/mcwv-theme/index.js'),
        resolve('packages/mcwv-theme/index.scss'),
      ],
      // toolbar: resolve('packages/mcwv-toolbar/index.js'),
      topAppBar: [
        resolve('packages/mcwv-top-app-bar/index.js'),
        resolve('packages/mcwv-top-app-bar/index.scss'),
      ],
      typography: [
        resolve('packages/mcwv-typography/index.js'),
        resolve('packages/mcwv-typography/index.scss'),
      ],
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
