const { VueLoaderPlugin } = require("vue-loader");

module.exports = function vueLoader() {
  return new VueLoaderPlugin();
};
