const path = require('path'); //path是node中的基本包，处理路径
const webpack = require('webpack');

//Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const VueClientPlugin = require('vue-server-renderer/client-plugin');

const baseConfig = require('./webpack.config.base');

// 启动脚本时的变量存在于process.env变量中
const isDev = process.env.NODE_ENV === 'development';

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  }),
  new VueLoaderPlugin(),
  new VueClientPlugin(),
];

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  historyApiFallback: {
    index: '/public/index.html'
  },
  hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
};

if (isDev) {
  config = merge(baseConfig, {
    // devtool: '#cheap-module-eval-source-map', // deprecated @v4.0
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
            //   options: {
            //     sourceMap: true,
            //   }
            },
            'stylus-loader'
          ],
        },
      ]
    },
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoEmitOnErrorsPlugin(), // deprecated @v4.0
    ]),
  });
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/client-entry.js'),
      // vendor: ['vue'], // deprecated @v4.0
    },
    output: {
      filename: '[name].[chunkhash:8].js',
      publicPath: '/public/'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'stylus-loader',
          ],
        },
      ]
    },
    plugins: defaultPlugins.concat([
      new MiniCssExtractPlugin({
        filename: "styles.[contentHash:8].css",
      }),
    ]),
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true,
    }
  });
};

module.exports = config;
