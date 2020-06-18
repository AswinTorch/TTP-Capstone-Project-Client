import types from "./action_types";

// Action creators for enrollment
export function fetchEnrolledCourses(courses) {
  return {
    type: types.FETCH_ENROLLED_COURSES,
    payload: courses,
  };
}

export const fetchAllCourses = (courses) => {
  return {
    type: types.FETCH_ALL_COURSES,
    payload: courses,
  };
};

export const fetchStudent = (student) => {
  return {
    type: types.FETCH_STUDENT,
    payload: student,
  };
};
