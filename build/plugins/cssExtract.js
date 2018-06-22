const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function cssExtractPlugin() {
  return new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "css/[name].css",
  });
};
