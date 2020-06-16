import types from "./action_types";

// Reducer for enrollment
const initialState = {
  enrolledCourses: {},
  allCourses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REGISTERED_COURSES:
      return action.payload;
    case types.FETCH_ALL_COURSES:
      return { ...state, allCourses: action.payload };
    default:
      return state;
  }
};

export default reducer;
