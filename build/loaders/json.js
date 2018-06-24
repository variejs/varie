module.exports = function jsonLoader() {
  return {
    test: /\.json$/,
    loader: "json-loader",
  };
};
