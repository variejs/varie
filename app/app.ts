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

new Application().boot().then(app => {
  new Vue({
    store: app.make<StateServiceInterface>("$store").getStore(),
    router: app.make<RouterInterface>("$router").getRouter()
  }).$mount($config.get("app.mount"));
});
