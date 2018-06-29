const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function() {
  return new OptimizeCSSAssetsPlugin();
};
