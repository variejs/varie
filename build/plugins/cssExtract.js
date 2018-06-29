const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(config) {
  return new MiniCssExtractPlugin({
    filename: `css/[name].css?[${config.hashType}]`,
    chunkFilename: `css/[name].css?[${config.hashType}]`,
  });
};
