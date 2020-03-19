const merge = require('webpack-merge');
const common = require('./webpack.common.js');

/** Webpack configuration for production purpose **/

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
});
