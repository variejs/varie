const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function() {
  return new HtmlWebpackPlugin({
    template: "./index.html",
  });
};
