const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/** Webpack configuration for dev purpose **/

module.exports = merge(common, {
  mode: 'development',
  devtool: false,
  devServer: {
    port: 3000,
    open: true,
    noInfo: true,
    historyApiFallback: true,
    inline: true,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
