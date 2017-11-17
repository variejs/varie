import NotificationModel from "@models/NotificationModel";

export default interface rootState {
  notifications: {
    notifications: Array<NotificationModel>;
  };
};
