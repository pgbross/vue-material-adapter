import { ESBuildMinifyPlugin } from 'esbuild-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTagsPlugin from 'html-webpack-tags-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path, { resolve as _resolve } from 'node:path';
import process from 'node:process';
import url from 'node:url';
import RemovePlugin from 'remove-files-webpack-plugin';
import sass from 'sass';
import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';

const { loader: _loader } = MiniCssExtractPlugin;
const { DefinePlugin } = webpack;

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const resolve = relativePath => _resolve(__dirname, relativePath);

const esbuildTargets = {
  evergreen: 'es2020',
  fallback: 'es2018',
};

const extraPath =
  process.env.TARGET_ENV === 'fallback' ? 'fallback' : 'evergreen';
const esbuildTarget = esbuildTargets[extraPath];

const isDevelopment = process.env.NODE_ENV !== 'production';

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
      postcssOptions: {
        'no-map': true,
        plugins: {
          'postcss-preset-env': {},
          cssnano: {},
        },
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      implementation: sass,
      sassOptions: {
        includePaths: [resolve('../node_modules')],
      },
    },
  },
];

export default [
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
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: ['vue-style-loader'].concat(cssLoaders),
          },
        },
        {
          test: /\.html$/,
          exclude: [/index\.html/],
          type: 'asset/source',
        },

        {
          test: /\.js$/,
          loader: 'esbuild-loader',
          options: {
            target: esbuildTarget,
          },
        },
        {
          test: /\.scss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          // type: 'asset/resource',
          // generator: {
          //   filename: 'css/[name].min.css',
          // },
          use: [
            _loader,
            {
              loader: 'css-loader?-url',
              options: { sourceMap: isDevelopment },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDevelopment,
                postcssOptions: {
                  'no-map': true,
                  plugins: {
                    'postcss-100vh-fix': {},
                    'postcss-preset-env': {},
                    cssnano: {},
                  },
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
                sassOptions: {
                  includePaths: ['node_modules'],
                  sourceMap: isDevelopment,
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      new DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_I18N_LEGACY_API__: false,
        __VUE_I18N_FULL_INSTALL__: true,
        __INTLIFY_PROD_DEVTOOLS__: false,
      }),
      new RemovePlugin({
        before: {
          root: './build',
        },
        watch: {
          beforeForFirstBuild: true,
          // parameters for "before watch compilation" stage.
          // root: './build',
          // include: ['admin'],
          // emulate: true,
        },
        after: {
          // parameters for "after normal and watch compilation" stage.
        },
      }),
      new HtmlWebpackPlugin({
        cache: false,
        template: 'index.html',
        filename: 'index.html',
        chunksSortMode: 'none',
      }),
      new HtmlWebpackTagsPlugin({
        tags: ['css/mdcweb.min.css'],
        publicPath: '/',
        append: false,
      }),

      // Only update what has changed on hot reload
      new webpack.HotModuleReplacementPlugin(),

      // new BundleAnalyzerPlugin({}), // uncomment to analyze the bundles
    ],
    output: {
      filename: 'js/[name].[contenthash:8].js',
      chunkFilename: 'js/[name].[contenthash:8].js',
      path: resolve('build'),
      publicPath: '/',
    },
    performance: {
      hints: false,
    },
    optimization: {
      usedExports: true,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Number.POSITIVE_INFINITY,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[/\\]node_modules[/\\]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[/\\]node_modules[/\\](.*?)([/\\]|$)/,
              )[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm/npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },

      minimizer: [
        new ESBuildMinifyPlugin({
          target: esbuildTarget,
        }),
      ],
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm-bundler.js',
        // '~': 'vue-material-adapter/packages',
      },
      extensions: ['*', '.vue', '.js', '.json'],
    },
    externals: {},
  },
];
