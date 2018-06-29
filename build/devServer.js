module.exports = function(config) {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    contentBase: config.root,
    historyApiFallback: true,
    noInfo: true,
    compress: true,
    quiet: true,
  };
};
