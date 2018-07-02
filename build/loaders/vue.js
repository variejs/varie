module.exports = function(config) {
  return {
    test: /\.vue$/,
    use: [...(!config.inProduction ? ["cache-loader"] : []), "vue-loader"],
  };
};
