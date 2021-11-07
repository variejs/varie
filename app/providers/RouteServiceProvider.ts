import Routes from "@routes";
import { RoutingServiceProvider as ServiceProvider } from "varie";

/*
|--------------------------------------------------------------------------
| Route Service Provider
|--------------------------------------------------------------------------
|
*/
export default class RoutingServiceProvider extends ServiceProvider {
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
