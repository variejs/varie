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

  map() {
    // this.$store.registerStore(...);
  }
}
