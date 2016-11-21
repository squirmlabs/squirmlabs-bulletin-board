const webpack           = require('webpack');
const R                 = require('ramda');
const React             = require('react');
const nutil             = require('util');
const glob              = require('glob');
const fmt               = nutil.format;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path              = require('path');

const ENV               = process.env;
const PROJECT_DIR       = ENV.PROJECT_DIR
const ENTRY_DIR         = path.join(PROJECT_DIR, 'src', 'entry');
const DIST_DIR          = path.join(PROJECT_DIR, 'dist');
const PACKAGE_INFO      = require(path.join(PROJECT_DIR, 'package'));
const VERSION_DIR       = path.join(DIST_DIR, PACKAGE_INFO.version);
const OUTPUT_DIR        = path.join(VERSION_DIR, 'pub');
const DEVELOPMENT       = 'development';
const PRODUCTION        = 'production';
const TESTING           = 'test';
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');

const NODE_ENV = ENV.NODE_ENV;
if (!NODE_ENV) {
  // if we're running as a dev server we always are in development mode
  NODE_ENV = process.argv[1].match(/webpack-dev-server$/) ?
  DEVELOPMENT :
  PRODUCTION;
}

const DEV  = NODE_ENV === DEVELOPMENT;
const TEST = NODE_ENV === TESTING;
const PROD = NODE_ENV === PRODUCTION;

const PROTOCOL = ENV.PROTOCOL || 'http';
const HOSTNAME = ENV.HOSTNAME || 'localhost';
const PORT     = parseInt(ENV.PORT || 8084, 10);
const HOST     = PROD ? '/' : fmt('%s://%s:%s/', PROTOCOL, HOSTNAME, PORT);

const JS_BUNDLE_NAME  = PROD ? '[name].[hash].js'  : '[name].bundle.js';
const CSS_BUNDLE_NAME = PROD ? '[name].[hash].css' : '[name].bundle.css';

module.exports = {
  debug:     !PROD,
  bail:      PROD,
  colors:    true,
  progress:  true,
  //--------------------------------------------------------------------------
  // Entry Points and Output
  //--------------------------------------------------------------------------
  // entry: TEST ? {} : { 'app': './src/app.js' },
  entry: TEST ? {} :
  glob.sync(ENTRY_DIR + '/*.js')
  .map(function(filepath) {
    const ext = path.extname(filepath);
    const base = path.basename(filepath, ext);
    const o = {};
    o[base] = filepath;
    return o;
  }).
  reduce(R.merge, {
    vendors: [
      'webpack-material-design-icons',
    ],
  }),

  output: TEST ? {} : {
    path:          OUTPUT_DIR,
    filename:      JS_BUNDLE_NAME,
    publicPath:    HOST,
    chunkFilename: JS_BUNDLE_NAME
  },
  devtool: TEST ? 'eval' : PROD ? 'source-map' : 'eval',
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, './.modernizrrc'),
    },
    extensions: ['', '.js', '.jsx', '.less', '.css', '.scss'],
  },
  modulesDirectories: [
    'node_modules',
    path.resolve(__dirname, './node_modules')
  ],
  //--------------------------------------------------------------------------
  // Loaders
  //--------------------------------------------------------------------------
  module: {
    preLoaders: [
      { test: /\.svg$/, loader: 'svgo?useConfig=svgoConfig' }
    ],

    get loaders() {
      const loaders = [
        { test: /\.json$/, loaders: ['json-loader'] },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: { presets: ['es2015', 'react', 'stage-1'] }
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          exclude: /(node_modules)\/react-toolbox/
        },
        // {
        //   test: /(\.scss|\.css)$/,
        //   include : /(node_modules)\/react-toolbox/,
        //   loader: ExtractTextPlugin.extract('style', 'css!sass!toolbox'),
        // },
        // {
        //   test: /\.(scss|css)$/,
        //   loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
        // },
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        },
        { test: /\.less/, loader: 'style/useable!css!less' },
        {
          test: /\.woff$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]'
        },
        {
          test: /\.woff2$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]',
        },
        {
          test: /\.svg$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[path][name].[ext]',
        },
        { test: /\.(jpe?g|png|gif|eot|ttf|svg|woff(2)?)(\?v=\d+\.\d+\.\d+)?/, loader: 'url-loader?limit=100000'
        },
        {
          test: /\.modernizrrc$/,
          loader: 'modernizr',
        },
      ];

      if (TEST) {
        loaders.push({
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        });
      }
      return loaders;
    }
  },
  postcss: function() {
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssUrl(),
      autoprefixer,
    ];
  },
  //--------------------------------------------------------------------------
  // Plugins
  //--------------------------------------------------------------------------
  get plugins() {
    const plugins = [
      new ExtractTextPlugin('bundle.css', { allChunks: true }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      new webpack.NoErrorsPlugin(),
      new ModernizrWebpackPlugin({htmlWebpackPlugin: true}),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
      new DashboardPlugin()
    ];

    if (DEV || PROD) {
      plugins.push(
        new HtmlWebpackPlugin({
          title: 'Squirmlabs Bulletin Board',
          minify: PROD ? {} : false,
          filename: 'index.html'
        })
      );
    }

    if (PROD) {
      plugins.push(
        new ExtractTextPlugin(CSS_BUNDLE_NAME, { allChunks: false }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
      );
    }

    return plugins;
  },


  //--------------------------------------------------------------------------
  // Dev Server Configuration
  //--------------------------------------------------------------------------
  devServer: {
    host: HOSTNAME,
    port: PORT,
    https: (/^https$/).test(PROTOCOL),
    contentBase: OUTPUT_DIR,
    hot: false,
    inline: true,
        // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      modules: false,
      cached: true,
      chunk: false
    }
  }
};

