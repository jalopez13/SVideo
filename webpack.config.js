const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader',
  use: [
    { loader: 'css-loader', options: { importLoaders: 1 } }, 
    'sass-loader'
  ]
})

module.exports = ({ mode }) => {
  const isDev = (mode == "development") ? true : false;
  
  return {
    mode,

    context: path.resolve(__dirname, 'src'),

    entry: {
      main: './js/index.js'
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.[hash].js'
    },

    module: {
      rules: [
        { 
          test: /\.(css|scss)$/,
          use: isDev ? cssDev : cssProd
        },

        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react']
            }
          }
        }
      ]
    },

    plugins: [
      new WebpackCleanupPlugin(),

      new webpack.ProgressPlugin(),

      new ExtractTextWebpackPlugin({
        filename: '[name].bundle.[hash].css',
        disable: isDev,
        allChunks: true
      }),

      new HtmlWebpackPlugin({
        title: 'Complete Intro to React | v3',
        template: 'index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: isDev ? false : true
        }
      }),

      new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      watchContentBase: true,
      compress: isDev ? false : true,
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 8080
    },

    node: {
      global: true
    }
  }
}