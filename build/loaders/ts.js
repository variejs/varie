module.exports = function tsLoader() {
  return  {
    test: /\.tsx?$/,
      loader : "ts-loader",
      options: {
          appendTsSuffixTo: [/\.vue$/],
      },
      exclude: /node_modules/,
  }
};
