import RouterInterface from "varie/lib/routing/RouterInterface";
let $router = $container.get<RouterInterface>("$router");

/*
|--------------------------------------------------------------------------
| Your default routes for your application
|--------------------------------------------------------------------------
|
*/

$router.route("/", {
  default : "welcome"
});

$router.template('/test', 'welcome').middleware(['auth']).group(() => {
  $router.route("tes", "welcome");
})