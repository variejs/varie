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
    $router.route("/settings", "admin").setName("restricted");
  })
  .middleware(["auth"])
  .prefix("admin");
// .template('admin_area')
// components -- allow for object in the route 2nd parameter
// // children
// props
// redirect
// aliases
// let group pass in properties as an array in the first param
