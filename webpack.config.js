const webpack = require('webpack');
const path = require('path');

let libraryName = 'hellewhile';
let plugins = [];
let outputFile = 'hellewhile.js';

module.exports = {
  entry: path.resolve(__dirname, 'src/hellewhile.js'),
  devtool: 'source-map',
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
    filename: outputFile,
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
  stats: {
    colors: true
  }
};
