import AppServiceProvider from "@app/providers/AppServiceProvider";
import HttpServiceProvider from "varie/lib/http/HttpServiceProvider";
import StoreServiceProvider from "@app/providers/StoreServiceProvider";
import RoutingServiceProvider from "@app/providers/RouteServiceProvider";
import ConfigServiceProvider from "varie/lib/config/ConfigServiceProvider";
import CookieServiceProvider from "varie/lib/cookies/CookieServiceProvider";
import FormServiceProvider from "varie/lib/plugins/forms/FormServiceProvider";
import ValidationServiceProvider from "varie/lib/validation/ValidationServiceProvider";
import NotificationServiceProvider from "varie/lib/plugins/notifications/NotificationServiceProvider";
import AutoRegisterMixinServiceProvider from "varie/lib/plugins/autoRegisterMixins/AutoRegisterMixinServiceProvider";
import AutoRegisterFilterServiceProvider from "varie/lib/plugins/autoRegisterFilters/AutoRegisterFilterServiceProvider";
import AutoRegisterLayoutServiceProvider from "varie/lib/plugins/autoRegisterLayouts/AutoRegisterLayoutServiceProvider";
import AutoRegisterComponentServiceProvider from "varie/lib/plugins/autoRegisterComponents/AutoRegisterComponentServiceProvider";
import AutoRegisterDirectiveServiceProvider from "varie/lib/plugins/autoRegisterDirectives/AutoRegisterDirectiveServiceProvider";

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
    StoreServiceProvider,
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
    NotificationServiceProvider,
  },
};
