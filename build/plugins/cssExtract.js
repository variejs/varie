const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function() {
  return new MiniCssExtractPlugin({
    filename: "css/[name].css?[contenthash]",
    chunkFilename: "css/[name].css?[contenthash]",
  });
};
