const webpack = require("webpack");

module.exports = function(config) {
  if (config.isProduction) {
    return [
      new webpack.HashedModuleIdsPlugin({
        hashFunction: "sha256",
        hashDigest: "hex",
        hashDigestLength: 20,
      }),
    ];
  }
  return [];
};
