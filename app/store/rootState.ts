import UserModel from "@models/UserModel";
import SiteModel from "@models/SiteModel";
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
  users: {
    users: Array<UserModel>;
    sites: Array<SiteModel>;
  };
  varie: {
    notifications: {
      notifications: Array<NotificationModel>;
    };
  };
};
