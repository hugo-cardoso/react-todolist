const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../build'),
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv()
  ]
});