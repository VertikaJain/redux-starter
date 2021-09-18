import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(bugAdded("bug1"));
store.dispatch(bugAdded("bug2"));
store.dispatch(bugAdded("bug3"));
store.dispatch(bugResolved(2));

unsubscribe();

store.dispatch(bugRemoved(1));

console.log("store", store);
