import Vue from 'vue';
import * as _ from 'lodash';
import { NotificationsState } from './stateInterface';
import NotificationModel from '../../models/NotificationModel';

export const add = (
	state: NotificationsState,
	notification: NotificationModel
) => {
	notification.id = guid();
	state.notifications.push(notification);
};

export const remove = (
	state: NotificationsState,
	notification: NotificationModel
) => {
	Vue.set(
		state,
		'notifications',
		_.reject(state.notifications, { id: notification.id })
	);
};

// TODO - this needs to be moved out
function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return (
		s4() +
		s4() +
		'-' +
		s4() +
		'-' +
		s4() +
		'-' +
		s4() +
		'-' +
		s4() +
		s4() +
		s4()
	);
}
