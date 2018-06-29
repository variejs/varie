module.exports = function() {
  return {
    test: /\.vue$/,
    use: ["cache-loader", "vue-loader"],
  };
};
