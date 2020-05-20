const path = require('path');
// eslint-disable-next-line no-unused-vars
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pkg = require('./package.json');
const resolve = relativePath => path.resolve(__dirname, relativePath);
const plugins = [];
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { importer } = require('./webpack.util');

module.exports = [
  {
    name: 'main-js-combined',
    mode: 'development',
    entry: [
      // resolve('packages/vue-material-adapter/index.scss'),
      resolve('packages/vue-material-adapter/index.js'),
    ],
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
                    browsers: pkg.browserslist,
                  },
                },
              ],
            ],
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
                config: { path: __dirname + '/postss.config.js' },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['node_modules'],
                  importer,
                  fiber: true,
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      // new CleanWebpackPlugin({ verbose: true }),
      ...plugins,
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'vue-material-adapter.min.css',
        chunkFilename: '[id].min.css',
      }),
    ],
  },
  {
    name: 'main-js-a-la-carte',
    mode: 'development',
    entry: {
      base: resolve('packages/mcwv-base/index.js'),
      button: [
        // resolve('packages/mcwv-button/index.scss'),
        resolve('packages/mcwv-button/index.js'),
      ],
      card: [
        // resolve('packages/mcwv-card/index.scss'),
        resolve('packages/mcwv-card/index.js'),
      ],
      checkbox: [
        // resolve('packages/mcwv-checkbox/index.scss'),
        resolve('packages/mcwv-checkbox/index.js'),
      ],
      chips: [
        // resolve('packages/mcwv-chips/index.scss'),
        resolve('packages/mcwv-chips/index.js'),
      ],
      dataTable: [
        // resolve('packages/mcwv-data-table/index.scss'),
        resolve('packages/mcwv-data-table/index.js'),
      ],
      dialog: [
        // resolve('packages/mcwv-dialog/index.scss'),
        resolve('packages/mcwv-dialog/index.js'),
      ],
      drawer: [
        // resolve('packages/mcwv-drawer/index.scss'),
        resolve('packages/mcwv-drawer/index.js'),
      ],
      fab: [
        // resolve('packages/mcwv-fab/index.scss'),
        resolve('packages/mcwv-fab/index.js'),
      ],
      floatingLabel: [
        // resolve('packages/mcwv-floating-label/index.scss'),
        resolve('packages/mcwv-floating-label/index.js'),
      ],
      iconButton: [
        // resolve('packages/mcwv-icon-button/index.scss'),
        resolve('packages/mcwv-icon-button/index.js'),
      ],
      layoutGrid: [
        // resolve('packages/mcwv-layout-grid/index.scss'),
        resolve('packages/mcwv-layout-grid/index.js'),
      ],
      lineRipple: [
        // resolve('packages/mcwv-line-ripple/index.scss'),
        resolve('packages/mcwv-line-ripple/index.js'),
      ],
      linearProgress: [
        // resolve('packages/mcwv-linear-progress/index.scss'),
        resolve('packages/mcwv-linear-progress/index.js'),
      ],
      list: [
        // resolve('packages/mcwv-list/index.scss'),
        resolve('packages/mcwv-list/index.js'),
      ],
      materialIcon: [
        // resolve('packages/mcwv-material-icon/index.scss'),
        resolve('packages/mcwv-material-icon/index.js'),
      ],
      menu: [
        // resolve('packages/mcwv-menu/index.scss'),
        resolve('packages/mcwv-menu/index.js'),
      ],
      notchedOutline: [
        // resolve('packages/mcwv-notched-outline/index.scss'),
        resolve('packages/mcwv-notched-outline/index.js'),
      ],
      radio: [
        // resolve('packages/mcwv-radio/index.scss'),
        resolve('packages/mcwv-radio/index.js'),
      ],
      ripple: [
        // resolve('packages/mcwv-ripple/index.scss'),
        resolve('packages/mcwv-ripple/index.js'),
      ],
      select: [
        // resolve('packages/mcwv-select/index.scss'),
        resolve('packages/mcwv-select/index.js'),
      ],
      slider: [
        // resolve('packages/mcwv-slider/index.scss'),
        resolve('packages/mcwv-slider/index.js'),
      ],
      snackbar: [
        // resolve('packages/mcwv-snackbar/index.scss'),
        resolve('packages/mcwv-snackbar/index.js'),
      ],
      switch: [
        // resolve('packages/mcwv-switch/index.scss'),
        resolve('packages/mcwv-switch/index.js'),
      ],
      tabs: [
        // resolve('packages/mcwv-tabs/index.scss'),
        resolve('packages/mcwv-tabs/index.js'),
      ],
      textfield: [
        // resolve('packages/mcwv-textfield/index.scss'),
        resolve('packages/mcwv-textfield/index.js'),
      ],

      topAppBar: [
        // resolve('packages/mcwv-top-app-bar/index.scss'),
        resolve('packages/mcwv-top-app-bar/index.js'),
      ],
      typography: [
        // resolve('packages/mcwv-typography/index.scss'),
        resolve('packages/mcwv-typography/index.js'),
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
                config: { path: __dirname + '/postss.config.js' },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('dart-sass'),
                sassOptions: {
                  includePaths: ['node_modules'],
                },
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
                sassOptions: {
                  includePaths: ['node_modules'],

                  fiber: true,
                },
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
