import { injectable, inject } from "inversify";
import RouterInterface from "varie/lib/routing/RouterInterface";

@injectable()
export default class Routes {
  private $router: RouterInterface;
  constructor(@inject("$router") $router) {
    this.$router = $router;
  }

  register() {
    /*
    |--------------------------------------------------------------------------
    | Your default routes for your application
    |--------------------------------------------------------------------------
    |
    */
    this.$router.route("/", "Welcome");

    this.$router.route("*", "errors/404");
  }
}
