/*
|--------------------------------------------------------------------------
| Your default routes for your application
|--------------------------------------------------------------------------
|
*/

$container.get('$route').make('/', 'welcome').setName('home');

$container.get('$route').group('public', () => {
  $container.get('$route').make('/', 'welcome');
}).middleware([
  'auth'
]);
//
// Route.prefix('api')
//.template('admin_area')
