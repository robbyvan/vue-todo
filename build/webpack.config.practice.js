const path = require('path'); //path是node中的基本包，处理路径
const webpack = require('webpack');

//Plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  }),
  new VueLoaderPlugin()
];

const devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  hot: true,
};

const config = merge(baseConfig, {
    entry: path.join(__dirname, '../practice/index.js'),
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
    resolve: {
      alias: {
        'vue' : path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
      }
    },
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
    ]),
  });
module.exports = config;
