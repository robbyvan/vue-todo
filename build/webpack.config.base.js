const path = require('path'); //path是webpack中的基本包，处理路径
const webpack = require('webpack');

// // 启动脚本时的变量存在于process.env变量中
const isDev = process.env.NODE_ENV === 'development'

//plugin configurations
const createVueLoaderOptions = require('./vue-loader.config');

const config = {
  mode: process.env.NODE_ENV || 'production', // dev or production
  target: 'web',
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]',
            },
          }
        ],
      }
    ],
  },
}

module.exports = config;

