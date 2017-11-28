import Vue from "vue";
import { Store } from "vuex";
import RouterInterface from "varie/lib/routing/RouterInterface";

/*
|--------------------------------------------------------------------------
| Vue Constructor Properties
|--------------------------------------------------------------------------
|
| You can add additional properties to let typescript do its work
|
*/
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    router?: RouterInterface;
    store?: Store<any>;
  }
}

/*
|--------------------------------------------------------------------------
| Vue Component Properties
|--------------------------------------------------------------------------
|
| You can add additional properties to let typescript do its work
|
*/
declare module "vue/types/vue" {
  interface Vue {
    $store: Store<any>;
  }
}
