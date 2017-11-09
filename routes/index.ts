import Home from '@views/home/Home.vue';
/*
|--------------------------------------------------------------------------
| Your default routes for your application
|--------------------------------------------------------------------------
|
*/

export default [{ name: 'home', path: '/', component: Home }];

// What i think i want it to look like
// Route.prefix('api')
//   .group(() => {
//    Route('/admin', '@views/admin');
//
//
// 	  Route.group(() => {
// 		  Route('/home', '@views/home');
// 	  })
//
//   })
//   .template('admin_area')
//   .middleware(['auth']);
