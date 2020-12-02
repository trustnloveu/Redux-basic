import store from "./store";
import * as actions from "./actionCreator";

store.subscribe(() => {
  console.log("Store has changed.");
});

store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugAdded("Bug 3"));

store.dispatch(actions.bugResolved(1));

console.log(store.getState());
