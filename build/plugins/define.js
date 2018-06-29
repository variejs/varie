const webpack = require("webpack");

module.exports = function(definitions = {}) {
  return new webpack.DefinePlugin(definitions);
};
