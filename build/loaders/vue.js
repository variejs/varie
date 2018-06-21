module.exports = function vueLoader(context) {
  return {
    test: /\.vue$/,
    use: ["cache-loader", "vue-loader"],
  };
};
