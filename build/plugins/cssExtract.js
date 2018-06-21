const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function cssExtractPlugin(context) {
  return new MiniCssExtractPlugin();
};
