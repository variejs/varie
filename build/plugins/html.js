const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function htmlPlugin() {
  return new HtmlWebpackPlugin({
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      removeScriptTypeAttributes: true,
    },
    hash: true,
    chunksSortMode: "dependency",
    template: "./index.html",
  });
};
