import AlertModel from "varie/lib/plugins/alerts/models/AlertModel";

/*
|--------------------------------------------------------------------------
| Root State
|--------------------------------------------------------------------------
| This manages the root state of the entire application, which allows
| typescript to let us know whats available
|
*/

export default interface rootState {
  // ...

  varie: {
    alerts: {
      alerts: Array<AlertModel>;
    };
  };
}
