export default {
	scrollBehavior: function(to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash,
			};
		}
		return {
			x: 0,
			y: 0,
		};
	},
};
