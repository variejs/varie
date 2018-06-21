const path = require("path");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const webpack = require("webpack");

const context = {
  root: path.resolve(__dirname),
  mode: "development",
  isProduction: false,
};

module.exports = {
  mode: context.mode,
  context: context.root,
  devtool: "eval-source-map",
  entry: {
    vendor: ["vue", "vuex"],
    app: [
      path.join(context.root, "app/app.ts"),
      path.join(context.root, "resources/sass/app.scss"),
    ],
  },
  output: {
    path: path.join(context.root, "public"),
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      require("./build/loaders/js")(),
      require("./build/loaders/ts")(),
      require("./build/loaders/scss")(context),
      require("./build/loaders/html")(),
      require("./build/loaders/images")(context),
      require("./build/loaders/fonts")(context),
      require("./build/loaders/vue")(),
    ],
  },
  plugins: [
    require("./build/plugins/vue")(),
    require("./build/plugins/clean")(context),
    require("./build/plugins/errors")(),
    require("./build/plugins/cssExtract")(context),
    require("./build/plugins/browserSync")(context),
    require("./build/plugins/notifications")(context),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20,
    }),
    require("./build/plugins/html")(context),
    new PreloadWebpackPlugin(),
  ],
  resolve: {
    symlinks: false,
    extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@app": path.join(__dirname, "app"),
      "@routes": path.join(__dirname, "routes"),
      "@config": path.join(__dirname, "config"),
      "@store": path.join(__dirname, "app/store"),
      "@models": path.join(__dirname, "app/models"),
      "@resources": path.join(__dirname, "resources"),
      "@views": path.join(__dirname, "resources/views"),
      "@components": path.join(__dirname, "app/components"),
    },
  },
};
