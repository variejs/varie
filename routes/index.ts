let $router = $container.get('$router');
/*
|--------------------------------------------------------------------------
| Your default routes for your application
|--------------------------------------------------------------------------
|
*/

$router.route('/', 'welcome')
    // .setName('home');

$router.group(()=> {
    $router.route('/test', 'test');
}).middleware(['auth'])
// Route.prefix('api')
//.template('admin_area')
