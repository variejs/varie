const webpack = require('webpack');

module.exports = function(config) {
  new webpack.optimize.AggressiveSplittingPlugin({
    minSize: 10000,
    maxSize: 30000,
  })
};
