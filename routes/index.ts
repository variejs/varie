import RouterInterface from "varie/lib/routing/RouterInterface";

export default function($router: RouterInterface) {
  /*
  |--------------------------------------------------------------------------
  | Your default routes for your application
  |--------------------------------------------------------------------------
  |
  */
  $router.route("/", "Welcome");

  $router.route("*", "errors/404");
}
