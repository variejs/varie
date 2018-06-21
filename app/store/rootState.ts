import NotificationModel from "varie/lib/plugins/notifications/models/NotificationModel";

/*
|--------------------------------------------------------------------------
| Root State
|--------------------------------------------------------------------------
| This manages the root state of the entire application, which allows
| typescript to let us know whats available
|
*/

export default interface rootState {
  varie: {
    notifications: {
      notifications: Array<NotificationModel>;
    };
  };
}
