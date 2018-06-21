import { TestState } from "./stateInterface";

export default class Mutations {
  UPDATE_TEST = (state: TestState, data) => {
    console.info("MUTATE TEST");
  };
}
