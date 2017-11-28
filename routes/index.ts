import RouterInterface from "varie/lib/routing/RouterInterface";
let $router = $container.get<RouterInterface>("$router");

/*
|--------------------------------------------------------------------------
| Your default routes for your application
|--------------------------------------------------------------------------
|
*/

$router.route("/", "welcome");

$router.template('test', 'welcome').group(() => {
  $router.route("tes", "welcome");
})