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
    render: (h) => h(BaseLayout),
    router: app.make<RouterInterface>("RouterService").getRouter(),
    store: app.make<StateServiceInterface>("StoreService").getStore(),
  }).$mount($config.get("app.mount"));
});
