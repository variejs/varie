const webpack = require("webpack");

module.exports = function providePlugin(definitions = {}) {
  return new webpack.DefinePlugin(definitions);
};
