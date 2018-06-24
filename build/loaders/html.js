module.exports = function htmlLoader() {
  return {
    test: /\.html$/,
    loaders: ["html-loader"],
  };
};
