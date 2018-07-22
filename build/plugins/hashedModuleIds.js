const webpack = require("webpack");

module.exports = function(config) {
  return new webpack.HashedModuleIdsPlugin({
    hashFunction: "sha256",
    hashDigest: "hex",
    hashDigestLength: 20,
  });
};
