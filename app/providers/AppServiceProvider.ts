import Vue from 'vue';
import Mixins from '@app/mixins';
import Filters from '@app/filters';
import Direcitves from '@app/directives';
import * as moment from 'moment-timezone';
import ServiceProvider from '@varie/support/serviceProvider';
import RouterInterface from '@varie/routing/RouterInterface';
import StateServiceInterface from '@varie/state/stateServiceInterface';

/*
|--------------------------------------------------------------------------
| App Service Provider
|--------------------------------------------------------------------------
| You can bind various items to the app here, or can create other
| custom providers that bind the container
|
*/
export default class AppProvider extends ServiceProvider {
	public boot() {
		moment.tz.setDefault($config.get('app.timezone'));

		new Mixins().register();
		new Filters().register();
		new Components().register();
		new Direcitves().register();

		new Vue({
			store: $container.get<StateServiceInterface>('$store').getStore(),
			router: $container.get<RouterInterface>('$router').getRouter(),
		}).$mount($config.get('app.mount'));
	}

	public register() {}
}
