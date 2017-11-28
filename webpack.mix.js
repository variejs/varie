const path = require("path");
const mix = require("laravel-mix");
const env = require("dotenv").config().parsed;
const HtmlWebpackPlugin = require("html-webpack-plugin");

if (process.env.NODE_ENV !== "local") {
  mix.config.production = true;
}

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
| https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme
|
*/
mix
  .typeScript("app/app.ts", "js")
  .extract([
    "ajv",
    "axios",
    "inversify",
    "lodash",
    "moment-timezone",
    "reflect-metadata",
    "vue",
    "vue-router",
    "vuex"
  ])
  .sass("./resources/sass/app.scss", "css")
  .setPublicPath("public")
  .browserSync({
    open: "external",
    host: env ? env.SITE_URL : "varie.dev",
    proxy: env ? env.SITE_URL : "varie.dev",
    files: ["public/**/*.js", "public/**/*.css"]
  })
  .sourceMaps()
  .webpackConfig({
    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: "index.html"
      })
    ],
    resolve: {
      symlinks: false,
      alias: {
        "@app": path.join(__dirname, "app"),
        "@routes": path.join(__dirname, "routes"),
        "@config": path.join(__dirname, "config"),
        "@store": path.join(__dirname, "app/store"),
        "@models": path.join(__dirname, "app/models"),
        "@resources": path.join(__dirname, "resources"),
        "@views": path.join(__dirname, "resources/views"),
        "@components": path.join(__dirname, "app/components")
      }
    }
  })
  .options({
    extractVueStyles: true
  });
