import types from "./action_types";

// Reducer for enrollment
const initialState = {
  student: {},
  allCourses: [],
  enrolledCourses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ENROLLED_COURSES:
      return { ...state, enrolledCourses: action.payload };
    case types.FETCH_ALL_COURSES:
      return { ...state, allCourses: action.payload };
    case types.FETCH_STUDENT:
      return { ...state, student: action.payload };
    case types.ADD_COURSE:
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
