import Vue from "vue";
import * as moment from "moment-timezone";
import ServiceProvider from "varie/lib/support/serviceProvider";
import RouterInterface from "varie/lib/routing/RouterInterface";
import StateServiceInterface from "varie/lib/state/stateServiceInterface";

/*
|--------------------------------------------------------------------------
| App Service Provider
|--------------------------------------------------------------------------
| You can bind various items to the app here, or can create other
| custom providers that bind the container
|
*/
export default class AppProvider extends ServiceProvider {
  public boot() {
    moment.tz.setDefault($config.get("app.timezone"));

    new Vue({
      store: $container.get<StateServiceInterface>("$store").getStore(),
      router: $container.get<RouterInterface>("$router").getRouter()
    }).$mount($config.get("app.mount"));
  }

  public register() {}
}
