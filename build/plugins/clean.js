const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = function cleanPlugin(config) {
  return new CleanWebpackPlugin(path.join(config.root, "public"));
};
