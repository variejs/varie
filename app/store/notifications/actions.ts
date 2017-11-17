import { ActionContext } from "vuex";
import RootState from "@store/rootState";
import { NotificationsState } from "./stateInterface";
import NotificationModel from "@models/NotificationModel";

export const add = (
  context: ActionContext<NotificationsState, RootState>,
  notification: NotificationModel
) => {
  context.commit("add", notification);
};

export const remove = (
  context: ActionContext<NotificationsState, RootState>,
  notification: NotificationModel
) => {
  context.commit("remove", notification);
};
