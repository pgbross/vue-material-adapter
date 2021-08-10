/* eslint quote-props:0 */
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { ESBuildMinifyPlugin } from 'esbuild-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import mit from 'markdown-it';
import mith from 'markdown-it-highlightjs';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'node:path';
import process from 'node:process';
import url from 'node:url';
import sass from 'sass';
import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';
import WebpackCdnPlugin from 'webpack-cdn-plugin';

// const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === `production`;
const isDevelopment = process.env.NODE_ENV === `development`;

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const resolve = relativePath => path.resolve(__dirname, relativePath);

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

const markdown = mit({
  html: true,
  breaks: false,
}).use(mith);

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: ['vue-style-loader', ...cssLoaders],
    },
  },

  {
    test: /\.js$/,
    loader: 'esbuild-loader',
    options: {
      target: 'es2019',
    },
  },

  {
    test: /\.md$/,
    use: [
      { loader: 'vue-loader' },
      {
        loader: 'vue-markdown-loader/lib/markdown-compiler',
        options: {
          raw: true,
          preventExtract: true,
          wrapper: 'article',
          markdown,
        },
      },
    ],
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10_000,
    },
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10_000,
    },
  },
];

const plugins = [
  // new ESBuildPlugin(),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  }),
  new VueLoaderPlugin(),
  // create index.html
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'demo/index.html',
    inject: 'body',
    minify: false,
    chunksSortMode: 'auto',
  }),

  // add vue dependencies
  new WebpackCdnPlugin({
    modules: [
      // {
      //   name: 'vue',
      //   var: 'Vue',
      //   path: isProduction ? 'dist/vue.esm.min.js' : 'dist/vue.esm.js',
      // },
      // {
      //   name: 'vue-router',
      //   var: 'VueRouter',
      //   path: 'dist/vue-router.esm-browser.js',
      // },
    ],
  }),
];

const config = {
  entry: {
    demo: resolve('main.js'),
    // plugin: path.resolve(__dirname, 'components/index.js'),
  },
  output: {
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    path: resolve(isProduction ? '../public/vue-material-adapter' : '../dev'),
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
      'vue-material-adapter': resolve('../src/index.js'),
      demo: resolve('./'),
      '~': resolve('../'),
    },
  },
  externals: {},
  devtool: isProduction ? 'source-map' : 'eval-cheap-source-map',
  module: { rules },
  plugins,
};

// Optimize for prod
if (isProduction) {
  config.mode = 'production';

  config.optimization = {
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
        target: 'es2019',
      }),
    ],
  };

  config.output.publicPath = '/vue-material-adapter/';

  // extract css rule
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {},
      },
      ...cssLoaders,
    ],
  });

  // // load css rule
  // config.module.rules.push({
  //   test: /\.(css|scss)$/,
  //   use: ['style-loader'].concat(cssLoaders),
  // });

  config.plugins.push(
    // clean output path
    new CleanWebpackPlugin(),

    // split css
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),

    // copy assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../static'),
          to: config.output.path,
          toType: 'dir',
        },
      ],
    }),
  );
}

// Enable dev server
if (isDevelopment) {
  config.mode = 'development';

  // load css rule
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: ['style-loader', ...cssLoaders],
  });

  config.plugins.push(
    // HMR
    new webpack.HotModuleReplacementPlugin(),
  );

  config.devServer = {
    contentBase: path.resolve(__dirname, 'static'),
    disableHostCheck: true,
    hot: true,
    quiet: true,
  };

  // cloud9 support
  process.env.IP && (config.devServer.host = process.env.IP);
  process.env.PORT && (config.devServer.port = process.env.PORT);
}

export default config;
