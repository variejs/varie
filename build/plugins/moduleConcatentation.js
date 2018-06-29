const webpack = require("webpack");

module.exports = function() {
  return new webpack.optimize.ModuleConcatenationPlugin();
};
