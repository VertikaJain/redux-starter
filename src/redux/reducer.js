import * as actions from "./actionTypes";

let lastId = 1;
const reducer = (state = [], action) => {
  // pure function
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: lastId++,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === actions.BUG_RESOLVED)
    return state.map((bug) =>
      bug.id === action.payload.id ? { ...bug, resolved: true } : bug
    );
  return state;
};

export default reducer;
