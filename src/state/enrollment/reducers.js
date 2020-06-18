import types from "./action_types";

// Reducer for enrollment
const initialState = {
  student: {},
  allCourses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_COURSES:
      return { ...state, allCourses: action.payload };
    case types.FETCH_STUDENT:
      return { ...state, student: action.payload };
    case types.ADD_COURSE:
      return {
        ...state,
        student: {
          ...state.student,
          enrolled_courses: [...state.student.enrolled_courses, action.payload],
        },
      };
    default:
      return state;
  }
};

export default reducer;
