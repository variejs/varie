import AppServiceProvider from "@app/providers/AppServiceProvider";
import StateServiceProvider from "varie-framework/state/serviceProvider";
import ConfigServiceProvider from "varie-framework/config/serviceProvider";
import RoutingServiceProvider from "varie-framework/routing/serviceProvider";

export default {
  /*
  |--------------------------------------------------------------------------
  | Mounting Element
  |--------------------------------------------------------------------------
  |
  | This is the element that the app will bind to
  |
  */
  mount: "#app",

  /*
  |--------------------------------------------------------------------------
  | App Name
  |--------------------------------------------------------------------------
  |
  */
  name: "Varie",

  /*
  |--------------------------------------------------------------------------
  | Application Timezone
  |--------------------------------------------------------------------------
  |
  | Here you may specify the default timezone for your application, which
  | will be used by the moment functions.
  |
  */
  timezone: "UTC",

  /*
  |--------------------------------------------------------------------------
  | Application Locale Configuration
  |--------------------------------------------------------------------------
  | // TODO - we can create a translation service provider to handle what type of locale to use
  |
  */
  locale: "en",

  /*
  |--------------------------------------------------------------------------
  | Service Providers
  |--------------------------------------------------------------------------
  | These will get auto loaded into the application to provide features
  |
  */
  providers: {
    /*
		 * Framework Service Providers...
		 */
    ConfigServiceProvider,
    StateServiceProvider,
    RoutingServiceProvider,

    /*
		 * Application Service Providers...
		 */
    AppServiceProvider
  }
};
