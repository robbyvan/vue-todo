const path = require('path'); //path是node中的基本包，处理路径
const webpack = require('webpack');

//Plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('webpack-merge');
const VueServerPlugin = require('vue-server-renderer/server-plugin');

let config;

const isDev = process.env.NODE_ENV === 'development';

const baseConfig = require('./webpack.config.base');

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.VUE_ENV': '"server"',
  }),
  new VueLoaderPlugin(),
];

if (isDev) {
  plugins = [...plugins, new VueServerPlugin()];
}

config = merge(baseConfig, {
    target: 'node',
    entry: path.join(__dirname, '../client/server-entry.js'),
    output: {
      libraryTarget: 'commonjs2',
      filename: 'server-entry.js',
      path: path.join(__dirname, '../server-build'),
    },
    devtool: 'source-map',
    externals: Object.keys(require('../package.json').dependencies),
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'stylus-loader',
          ],
        },
      ]
    },
    plugins: plugins
  });

config.resolve = {
  alias: {
    'model': path.join(__dirname, '../client/model/server-model.js')
  }
};

module.exports = config;
