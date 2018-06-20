import { ActionContext } from "vuex";
import RootState from "@store/rootState";
import { TestState } from "./stateInterface";
import HttpServiceInterface from 'varie/lib/http/HttpServiceInterface'
import getDecorators from "inversify-inject-decorators";
const { lazyInject } = getDecorators($app.$container);

export default class Actions {

  @lazyInject("$http")
  private $http: HttpServiceInterface;


   test = (context: ActionContext<TestState, RootState>, data) => {
     console.info(this.$http);
     context.commit('UPDATE_TEST', 123)
   };
}


