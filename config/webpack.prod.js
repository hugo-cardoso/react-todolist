const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({           
      FIREBASE_KEY: JSON.stringify(process.env.FIREBASE_KEY),
      GOOGLE_KEY: JSON.stringify(process.env.GOOGLE_KEY),   
    })
  ]
});