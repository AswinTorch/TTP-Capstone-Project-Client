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
    // ADD
    case types.ADD_COURSE:
      return {
        ...state,
        student: {
          ...state.student,
          enrolled_courses: [...state.student.enrolled_courses, action.payload],
        },
      };
    // DROP
    case types.DROP_COURSE:
      let enrolledCourses = state.student.enrolled_courses;
      const updatedCourses = enrolledCourses.filter(
        (course) => !_.isEqual(course, action.payload)
      );
      return {
        ...state,
        student: { ...state.student, enrolled_courses: updatedCourses },
      };
    // SWAP
    case types.SWAP_COURSES:
      let previousCourse = action.payload[0];
      let newCourse = action.payload[1];

      return {
        ...state,
        student: {
          ...state.student,
          enrolled_courses: [
            ...state.student.enrolled_courses,
            newCourse,
          ].filter((course) => !_.isEqual(course, previousCourse)),
        },
      };

    default:
      return state;
  }
};

export default reducer;
