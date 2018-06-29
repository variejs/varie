const webpack = require("webpack");

module.exports = function(config) {
  if (config.hmr) {
    return [new webpack.HotModuleReplacementPlugin()];
  }
  return [];
};
