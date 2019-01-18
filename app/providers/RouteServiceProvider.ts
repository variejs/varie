import Routes from "@routes";
import { ServiceProvider } from 'varie'
import RouterInterface from 'varie/lib/routing/RouterInterface'

/*
|--------------------------------------------------------------------------
| Route Service Provider
|--------------------------------------------------------------------------
|
*/
export default class RoutingServiceProvider extends ServiceProvider {
  public $router: RouterInterface;

  public async boot() {
    super.boot();

    // ...
  }

  public async register() {
    // @ts-ignore // todo - should not ignore
    super.register();

    // ...
  }

  map() {
    this.$router.register(Routes);
  }
}
