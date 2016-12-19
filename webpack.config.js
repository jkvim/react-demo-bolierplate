const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'index.jsx')
    ],
  },
  devtool: '#source-map',
  output: {
    filename: './bundle.js',
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new HTMLWebpackPlugin({
      filename: './index.html',
      template: './index.html',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
