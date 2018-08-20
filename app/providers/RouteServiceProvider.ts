import Routes from "@routes";
import ServiceProvider from "varie/lib/support/ServiceProvider";

/*
|--------------------------------------------------------------------------
| App Service Provider
|--------------------------------------------------------------------------
| You can bind various items to the app here, or can create other
| custom providers that bind the container
|
*/
export default class RouteServiceProvider extends ServiceProvider {
  public boot() {
    this.app.make<Routes>("RouteServiceProvider").register();
  }

  public register() {
    this.app.singleton("RouteServiceProvider", Routes);
  }
}
