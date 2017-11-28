/*
|--------------------------------------------------------------------------
| App Entry
|--------------------------------------------------------------------------
| Bootstrapping the application together
|
*/

import Vue from "vue";
import { Application } from "varie";
import RouterInterface from "varie/lib/routing/RouterInterface";
import StateServiceInterface from "varie/lib/state/StateServiceInterface";

new Application().boot().then(() => {
  new Vue({
    store: $container.get<StateServiceInterface>("$store").getStore(),
    router: $container.get<RouterInterface>("$router").getRouter()
  }).$mount($config.get("app.mount"));
});
