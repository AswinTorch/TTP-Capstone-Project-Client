import types from "./action_types";

// Action creators for enrollment
export function fetchRegisteredCourses(courses) {
  return {
    type: types.FETCH_REGISTERED_COURSES,
    payload: courses,
  };
}

export const fetchAllCourses = (courses) => {
  return {
    type: types.FETCH_ALL_COURSES,
    payload: courses,
  };
};
