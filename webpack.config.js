const path = require("path");

const config = {
  appName: "Varie",
  host: "varie.test",
  mode: process.env.NODE_ENV,
  root: path.resolve(__dirname),
  isProduction: process.env.NODE_ENV !== "development",
};

module.exports = {
  mode: config.mode,
  context: config.root,
  devtool: config.isProduction ? "hidden-source-map" : "eval-source-map",
  entry: {
    vendor: ["vue", "vue-router", "vuex"], // TODO - we can do this differntly
    app: [
      path.join(config.root, "app/app.ts"),
      path.join(config.root, "resources/sass/app.scss"),
    ],
  },
  output: {
    path: path.join(config.root, "public"),
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync|varie)$/,
    rules: [
      require("./build/loaders/js")(),
      require("./build/loaders/ts")(),
      require("./build/loaders/vue")(),
      require("./build/loaders/json")(),
      require("./build/loaders/scss")(config),
      require("./build/loaders/html")(),
      require("./build/loaders/images")(),
      require("./build/loaders/fonts")(),
    ],
  },
  plugins: [
    require("./build/plugins/html")(),
    require("./build/plugins/vue")(),
    require("./build/plugins/cssExtract")(),
    require("./build/plugins/preload")(),
    require("./build/plugins/errors")(),
    require("./build/plugins/hashedModuleIds")(),
    require("./build/plugins/clean")(config),
    require("./build/plugins/notifications")(config),
    require("./build/plugins/browserSync")(config),
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
