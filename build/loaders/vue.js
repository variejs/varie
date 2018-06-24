module.exports = function vueLoader() {
  return {
    test: /\.vue$/,
    use: ["cache-loader", "vue-loader"],
  };
};
