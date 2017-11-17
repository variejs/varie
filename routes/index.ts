let $router = $container.get("$router");

/*
|--------------------------------------------------------------------------
| Your default routes for your application
|--------------------------------------------------------------------------
|
*/

$router.route("/", "welcome").setName("home");

$router
  .group(() => {
    $router.route("/dashboard", "test").setName('admin');
    $router.route("/settings", "test").setName('settings');
  })
  .middleware(["auth"])
  .prefix('admin');
// Route.prefix('api')
//.template('admin_area')
