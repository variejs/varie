import { WebBundler } from "varie-bundler";
import { EnvironmentTypes } from "varie-bundler/lib/types/EnvironmentTypes";

export default function ({ production }) {
  return new WebBundler(
    production ? EnvironmentTypes.Production : EnvironmentTypes.Development,
  )
    .entry("app", ["app/app.ts", "resources/sass/app.scss"])
    .aliases({
      "@app": "app",
      "@views": "views",
      "@store": "store",
      "@config": "config",
      "@routes": "routes",
      "@models": "app/models",
      "@resources": "resources",
      "@components": "app/components",
    })
    .purgeCss(["app", "views", "node_modules/varie"])
    .globalSassIncludes("resources/sass/base/_variables.scss")
    .aggressiveVendorSplitting()
    .eslint()
    .build();
}
