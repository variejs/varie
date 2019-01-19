import Vue from "vue";

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
    $inject?: Array<string>;

    // ...
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
    // ...
  }
}
