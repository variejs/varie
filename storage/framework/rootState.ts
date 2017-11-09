import NotificationModel from '@varie/plugins/notifications/models/NotificationModel';

export default interface rootState {
	_ui_framework: {
		loading_screen: {
			loading: boolean;
		};

		notifications: {
			notifications: Array<NotificationModel>;
		};
	};
};
