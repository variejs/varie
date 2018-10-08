import HttpServiceProvider from "varie/lib/http/ServiceProvider";
import AppServiceProvider from "@app/providers/AppServiceProvider";
import ConfigServiceProvider from "varie/lib/config/ServiceProvider";
import StoreServiceProvider from "@app/providers/StoreServiceProvider";
import RoutingServiceProvider from "@app/providers/RouteServiceProvider";
import FormsServiceProvider from "varie/lib/plugins/forms/ServiceProvider";
import ValidationServiceProvider from "varie/lib/validation/ServiceProvider";
import NotificationsProvider from "varie/lib/plugins/notifications/ServiceProvider";
import AutoRegisterMixinsServiceProvider from "varie/lib/plugins/autoRegisterMixins/ServiceProvider";
import AutoRegisterFiltersServiceProvider from "varie/lib/plugins/autoRegisterFilters/ServiceProvider";
import AutoRegisterLayoutsServiceProvider from "varie/lib/plugins/autoRegisterLayouts/ServiceProvider";
import AutoRegisterComponentsServiceProvider from "varie/lib/plugins/autoRegisterComponents/ServiceProvider";
import AutoRegisterDirectivesServiceProvider from "varie/lib/plugins/autoRegisterDirectives/ServiceProvider";
import AuthServiceProvider from "varie/lib/auth/ServiceProvider";

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
     * Framework Service Providers...
     */
    ConfigServiceProvider,
    StoreServiceProvider,
    RoutingServiceProvider,
    HttpServiceProvider,
    FormsServiceProvider,
    ValidationServiceProvider,
    AutoRegisterMixinsServiceProvider,
    AutoRegisterFiltersServiceProvider,
    AutoRegisterLayoutsServiceProvider,
    AutoRegisterComponentsServiceProvider,
    AutoRegisterDirectivesServiceProvider,
    AuthServiceProvider,
    /*
     * Application Service Providers...
     */
    AppServiceProvider,
    NotificationsProvider,
  },
};
