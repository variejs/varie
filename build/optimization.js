module.exports = function(config) {
  return {
    splitChunks: {
      minSize: 30000,
      maxSize: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: "vendor",
          chunks: "initial",
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk : true,
    providedExports : true,
    minimizer: require("./minimizer")(config),
  };
};
