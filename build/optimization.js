module.exports = function(config) {
  return {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
        vendors: {
          name: "vendors",
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: "initial",
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: require("./minimizer")(config),
  };
};
