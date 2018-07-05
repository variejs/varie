module.exports = function(config) {
  return {
    test: /\.vue$/,
    use: [...(!config.isProduction ? ["cache-loader"] : []), "vue-loader"],
  };
};
