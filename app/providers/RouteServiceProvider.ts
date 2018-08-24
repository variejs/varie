import Routes from "@routes";
import ServiceProvider from "varie/lib/routing/ServiceProvider";
import VueRouterService from "varie/lib/routing/VueRouterService";

/*
|--------------------------------------------------------------------------
| Route Service Provider
|--------------------------------------------------------------------------
|
*/
export default class RoutingServiceProvider extends ServiceProvider {
  public $router: VueRouterService;

  map() {
    this.$router.register(Routes);
  }
}
