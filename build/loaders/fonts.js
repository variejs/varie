module.exports = function fontsLoader() {
  return {
    test: /\.(woff2?|ttf|eot|svg|otf)$/,
    loader: "file-loader",
    options: {
      limit: 4096,
      name: "fonts/[name].[ext]?[hash:8]",
    },
  };
};
