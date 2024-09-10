const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    static: './dist',
    hot: false,
    port: 8080,
  },
});