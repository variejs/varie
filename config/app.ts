import AppServiceProvider from "@app/providers/AppServiceProvider";
import StateServiceProvider from "@app/providers/StateServiceProvider";
import RoutingServiceProvider from "@app/providers/RouteServiceProvider";

import {
  FormServiceProvider,
  AlertServiceProvider,
  HttpServiceProvider,
  ConfigServiceProvider,
  CookieServiceProvider,
  StorageServiceProvider,
  ValidationServiceProvider,
  AutoRegisterMixinServiceProvider,
  AutoRegisterFilterServiceProvider,
  AutoRegisterLayoutServiceProvider,
  AutoRegisterComponentServiceProvider,
  AutoRegisterDirectiveServiceProvider,
} from "varie";

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
  |
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
     * Varie Framework Service Providers...
     */
    ConfigServiceProvider,
    CookieServiceProvider,
    StorageServiceProvider,
    HttpServiceProvider,
    StateServiceProvider,
    RoutingServiceProvider,

    /*
     * Varie Plugin Service Providers...
     */
    FormServiceProvider,
    ValidationServiceProvider,
    AutoRegisterMixinServiceProvider,
    AutoRegisterFilterServiceProvider,
    AutoRegisterLayoutServiceProvider,
    AutoRegisterComponentServiceProvider,
    AutoRegisterDirectiveServiceProvider,

    /*
     * Package Service Providers...
     */

    /*
     * Application Service Providers...
     */
    AppServiceProvider,
    AlertServiceProvider,
  },
};
