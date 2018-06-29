const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = function() {
  return new UglifyJSPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
  });
};
