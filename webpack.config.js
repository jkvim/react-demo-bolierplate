const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://locahost:8080',
    path.resolve(__dirname, 'index.jsx')],
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
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
      },
    ],
  },
};
