import AppServiceProvider from "@app/providers/AppServiceProvider";
import StateServiceProvider from "@app/providers/StateServiceProvider";
import RoutingServiceProvider from "@app/providers/RouteServiceProvider";

import {
  // Core Service Providers
  HttpServiceProvider,
  ConfigServiceProvider,
  CookieServiceProvider,
  StorageServiceProvider,

  // Support Service Providers
  Model,
  ServiceProvider,

  // Plugin Service Providers
  FormServiceProvider,
  AlertServiceProvider,
  ValidationServiceProvider,

  // Auto Register Service Providers
  AutoRegisterMixinServiceProvider,
  AutoRegisterFilterServiceProvider,
  AutoRegisterLayoutServiceProvider,
  AutoRegisterComponentServiceProvider,
  AutoRegisterDirectiveServiceProvider,
} from 'varie';


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
    StateServiceProvider,
    RoutingServiceProvider,
    HttpServiceProvider,
    FormServiceProvider,
    ValidationServiceProvider,
    AutoRegisterMixinServiceProvider,
    AutoRegisterFilterServiceProvider,
    AutoRegisterLayoutServiceProvider,
    AutoRegisterComponentServiceProvider,
    AutoRegisterDirectiveServiceProvider,

    /*
     * Application Service Providers...
     */
    AppServiceProvider,
    AlertServiceProvider,
  },
};
