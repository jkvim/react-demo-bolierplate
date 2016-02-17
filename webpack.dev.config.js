'use strict';
const path = require('path');
const webpack = require('webpack');

function dir (subpath) {
  return require('path').join(__dirname, subpath);
}

module.exports = {
  entry: ['webpack-hot-middleware/client', './dev.jsx'],
  output: {
    path: './',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: [/node_modules/, /server/],
        loader: 'babel',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-1', 'react-hmre']
        }
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /server/],
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      }
    ]
  }
};
