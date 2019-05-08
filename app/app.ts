/*
|--------------------------------------------------------------------------
| App Entry
|--------------------------------------------------------------------------
| Bootstrapping the application together
|
*/
import Vue from "vue";
import { Application } from "varie";
import BaseLayout from "varie/BaseLayout.vue";
import RouterInterface from "varie/lib/routing/RouterInterface";
import StateServiceInterface from "varie/lib/state/StateServiceInterface";

new Application().boot().then((app) => {
  new Vue({
    render: (h) => h(BaseLayout),
    router: app.make<RouterInterface>("RouterService").getRouter(),
    store: app.make<StateServiceInterface>("StateService").getStore(),
  }).$mount($config.get("app.mount"));
});
