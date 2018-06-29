module.exports = function(config) {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    contentBase: config.root,
    host: config.host,
    historyApiFallback: true,
    noInfo: true,
    compress: true,
    quiet: true,
    overlay: true,
  };
};
