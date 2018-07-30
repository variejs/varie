let $router = $app.make<RouterInterface>("$router");
import RouterInterface from "varie/lib/routing/RouterInterface";

/*
|--------------------------------------------------------------------------
| Your default routes for your application
|--------------------------------------------------------------------------
|
*/

$router
  .middleware([
    'ProgressBar'
  ])
  .area('Welcome')
  .group(() => {
  $router.route("/", "Welcome");
})
$router.route("*", "errors/404");
