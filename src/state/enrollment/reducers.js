import types from "./action_types";
import _ from "lodash";

// Reducer for enrollment
const initialState = {
  student: {},
  allCourses: [],
  professorReviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetches
    case types.FETCH_ALL_COURSES:
      return { ...state, allCourses: action.payload };
    case types.FETCH_STUDENT:
      return { ...state, student: action.payload };
    case types.FETCH_PROFESSOR_REVIEWS:
      return { ...state, professorReviews: action.payload };

    // Operations
    case types.ADD_COURSE:
      return {
        ...state,
        student: {
          ...state.student,
          enrolled_courses: [...state.student.enrolled_courses, action.payload],
        },
      };
    case types.DROP_COURSE:
      let enrolledCourses = state.student.enrolled_courses;
      const updatedCourses = enrolledCourses.filter(
        (course) => !_.isEqual(course, action.payload)
      );
      return {
        ...state,
        student: { enrolled_courses: updatedCourses },
      };
    // SWAP GOES HERE

    default:
      return state;
  }
};

export default reducer;
