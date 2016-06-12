'use strict';

const webpack = require('webpack');

module.exports = {

  entry: {
    app: __dirname + '/js/main'
  },

  output: {
    path: __dirname + '/dist/js',
    filename:   "[name].js"
  },

  module: {
    loaders: [{
      test:   /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }],
  }
};