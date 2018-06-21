const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = function cleanPlugin(context) {
  return new CleanWebpackPlugin(path.join(context.root, "public"));
};
