const path = require('path');
const pkg = require('./package.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const webpack = require('webpack');

// eslint-disable-next-line
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = relativePath => path.resolve(__dirname, relativePath);
module.exports = [
  {
    target: 'web',
    devtool: 'source-map',
    entry: {
      index: [resolve('main.js'), resolve('mdcweb.scss')],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      // open: true,
      compress: true,
      // hot: true,
      port: 8080,
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: [/index\.html/],
          type: 'asset/source',
        },

        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [/node_modules/, /common/],
          options: {
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
          type: 'asset/resource',
          generator: {
            filename: 'css/[name].min.css',
          },
          use: [
            {
              loader: 'extract-loader',
            },
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
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
      new CleanWebpackPlugin({
        verbose: true,
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        chunksSortMode: 'none',
      }),
      new HtmlWebpackTagsPlugin({
        tags: ['css/mdcweb.min.css'],
        publicPath: '/',
        append: false,
      }),
      new MiniCssExtractPlugin({
        filename: '[hash]-[name].css',
      }),

      // Only update what has changed on hot reload
      new webpack.HotModuleReplacementPlugin(),

      // new BundleAnalyzerPlugin({}), // uncomment to analyze the bundles
    ],
    output: {
      filename: '[name].js',
      path: resolve('build'),
      publicPath: '/',
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              )[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
          styles: {
            name: 'style',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    resolve: {
      /**
       * The compiler-included build of vue which allows to use vue templates
       * without pre-compiling them
       */
      alias: {
        vue$: 'vue/dist/vue.esm-bundler.js',
      },
      extensions: ['*', '.vue', '.js', '.json'],
    },
    externals: {},
  },
];
