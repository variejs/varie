const path = require("path");

const context = {
  root: path.resolve(__dirname),
  mode: "development",
  isProduction: false,
};

module.exports = {
  mode: context.mode,
  context: context.root,
  devtool: "eval-source-map", // TOOD - needs to be diff for production
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
    noParse: /^(vue|vue-router|vuex|vuex-router-sync|varie)$/,
    rules: [
      require("./build/loaders/js")(),
      require("./build/loaders/ts")(),
      require("./build/loaders/vue")(),
      require("./build/loaders/json")(),
      require("./build/loaders/scss")(context),
      require("./build/loaders/html")(),
      require("./build/loaders/images")(context),
      require("./build/loaders/fonts")(context),
    ],
  },
  plugins: [
    require("./build/plugins/html")(context),
    require("./build/plugins/vue")(),
    require("./build/plugins/cssExtract")(context),
    require("./build/plugins/preload")(),
    require("./build/plugins/errors")(),
    require("./build/plugins/hashedModuleIds")(),
    require("./build/plugins/clean")(context),
    require("./build/plugins/notifications")(context),
    require("./build/plugins/browserSync")(context),
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
