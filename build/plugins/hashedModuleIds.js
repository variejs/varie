const webpack = require("webpack");

module.exports = function hashedModuleIdsPlugin(context) {
    return new webpack.HashedModuleIdsPlugin({
        hashFunction: "sha256",
        hashDigest: "hex",
        hashDigestLength: 20,
    });
};