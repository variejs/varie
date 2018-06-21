const webpack = require("webpack");

module.exports = function providePlugin(context, identifiers = {}) {
  return new webpack.ProvidePlugin(identifiers);
};
