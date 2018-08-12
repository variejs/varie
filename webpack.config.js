const path = require("path");
const VarieBundler = require("varie-bundler");

module.exports = function(env, argv) {
  return new VarieBundler(argv, __dirname)
    .entry("app", ["app/app.ts", "resources/sass/app.scss"])
    .aliases({
      "@app": path.join(__dirname, "app"),
      "@views": path.join(__dirname, "views"),
      "@store": path.join(__dirname, "store"),
      "@config": path.join(__dirname, "config"),
      "@routes": path.join(__dirname, "routes"),
      "@models": path.join(__dirname, "app/models"),
      "@resources": path.join(__dirname, "resources"),
      "@components": path.join(__dirname, "app/components"),
    })
    .build();
};
