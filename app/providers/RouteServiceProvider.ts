import Routes from "@routes";
import VueRouterService from "varie/lib/routing/VueRouterService";
import ServiceProvider from "varie/lib/routing/RoutingServiceProvider";

/*
|--------------------------------------------------------------------------
| Route Service Provider
|--------------------------------------------------------------------------
|
*/
export default class RoutingServiceProvider extends ServiceProvider {
  public $router: VueRouterService;

  public async boot() {
    super.boot();

    // ...
  }

  public async register() {
    super.register();

    // ...
  }

  map() {
    this.$router.register(Routes);
  }
}
