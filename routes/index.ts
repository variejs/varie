let $router = $container.get("$router");

/*
|--------------------------------------------------------------------------
| Your default routes for your application
|--------------------------------------------------------------------------
|
*/

$router.route("/", "welcome").setName("home");
$router.route("/settings", "settings");

$router
  .group(() => {
    $router.route("/settings", "admin").setName('restricted');
  })
  .middleware(["auth"])
  .prefix('admin')
  // .template('admin_area')
  // components -- allow for object in the route 2nd paramter
// // children
// props
// redirect
// aliases