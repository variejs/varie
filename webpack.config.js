const path = require("path");

module.exports = (env, argv) => {
  const config = {
    appName: "Varie",
    host: "varie.test",
    mode: argv.mode,
    root: path.resolve(__dirname),
    hmr: process.argv.includes("--hot"),
    isProduction: argv.mode === "production",
    outputPath: path.join(__dirname, "public"),
    hashType: process.argv.includes("--hot") ? "hash" : "contenthash",
  };

  return {
    mode: config.mode,
    context: config.root,
    optimization: require("./build/optimization")(config),
    devtool: config.isProduction ? "source-map" : "eval-source-map",
    entry: {
      app: [
        path.join(config.root, "app/app.ts"),
        path.join(config.root, "resources/sass/app.scss"),
      ],
    },
    output: {
      publicPath: "/",
      path: config.outputPath,
      filename: `js/[name].js?[${config.hashType}]`,
      chunkFilename: `js/[name].js?[${config.hashType}]`,
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
        require("./build/loaders/fonts")(),
        require("./build/loaders/images")(),
      ],
    },
    plugins: [
      require("./build/plugins/define")({
        ENV: config.mode,
      }),
      require("./build/plugins/clean")(config),
      require("./build/plugins/html")(),
      require("./build/plugins/vue")(),
      require("./build/plugins/cssExtract")(config),
      require("./build/plugins/moduleConcatentation")(),
      require("./build/plugins/preload")(),
      require("./build/plugins/errors")(),
      require("./build/plugins/notifications")(config),
      require("./build/plugins/browserSync")(config),
      ...require("./build/plugins/hashedModuleIds")(config),
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
    stats: require("./build/stats")(),
    devServer: require("./build/devServer")(config),
  };
};
