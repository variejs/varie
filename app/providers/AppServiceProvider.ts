import * as moment from "moment-timezone";
import ServiceProvider from "varie/lib/support/serviceProvider";

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
  }

  public register() {}
}
