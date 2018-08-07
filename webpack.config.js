const webpack = require('webpack');
const path = require('path');
// const env = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'hellewhile';
let plugins = [];
let outputFile = 'hellewhile.js';

plugins.push(new webpack.NoEmitOnErrorsPlugin());

module.exports = {
  entry: path.resolve(__dirname, 'src/hellewhile.js'),
  devtool: 'source-map',
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
    filename: outputFile
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: plugins,
  stats: {
    colors: true
  }
};
