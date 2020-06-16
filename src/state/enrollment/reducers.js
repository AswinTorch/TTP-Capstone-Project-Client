import types from "./action_types";

// Reducer for enrollment
const reducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_REGISTERED_COURSES:
      return action.payload;
    case types.FETCH_ALL_COURSES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
