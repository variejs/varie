import ServiceProvider from "varie/lib/state/StateServiceProvider";
import StateServiceInterface from "varie/lib/state/StateServiceInterface";

/*
|--------------------------------------------------------------------------
| Store Service Provider
|--------------------------------------------------------------------------
|
*/
export default class StateServiceProvider extends ServiceProvider {
  public $store: StateServiceInterface;

  public async boot() {
    super.boot();

    // ...
  }

  public async register() {
    super.register();

    // ...
  }

  map() {
    // this.$store.registerStore(...);
  }
}
