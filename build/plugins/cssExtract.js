const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function cssExtractPlugin(context) {
  return new MiniCssExtractPlugin({
    filename: "css/[name].[chunkhash:8].css",
    chunkFilename: "css/[name].[chunkhash:8].css",
  });
};
