/*
|--------------------------------------------------------------------------
| App Entry
|--------------------------------------------------------------------------
| Bootstrapping the application together
|
*/
import Vue from "vue";
import { application } from "varie";
import BaseLayout from "varie/BaseLayout.vue";
import RouterInterface from "varie/lib/routing/RouterInterface";
import StateServiceInterface from "varie/lib/state/StateServiceInterface";

application.boot().then((app) => {
  new Vue({
    store: app.make<StateServiceInterface>("$store").getStore(),
    router: app.make<RouterInterface>("$router").getRouter(),
    render: (h) => h(BaseLayout),
  }).$mount($config.get("app.mount"));
});
