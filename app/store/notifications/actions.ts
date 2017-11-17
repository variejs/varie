import { ActionContext } from 'vuex';
import RootState from '@storage/framework/rootState';
import { NotificationsState } from './stateInterface';
import NotificationModel from '@ui.framework/plugins/notifications/models/NotificationModel';

export const add = (
	context: ActionContext<NotificationsState, RootState>,
	notification: NotificationModel
) => {
	context.commit('add', notification);
};

export const remove = (
	context: ActionContext<NotificationsState, RootState>,
	notification: NotificationModel
) => {
	context.commit('remove', notification);
};
