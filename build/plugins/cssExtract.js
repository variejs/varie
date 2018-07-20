const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(config) {
  if (!config.isHot) {
    return [
      new MiniCssExtractPlugin({
        filename: `css/[name].css?[${config.hashType}]`,
        chunkFilename: `css/[name].css?[${config.hashType}]`,
      }),
    ];
  }
  return [];
};
