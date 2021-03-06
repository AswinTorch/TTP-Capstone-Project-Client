import types from "./action_types";

// ACTION CREATORS
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

export const addCourse = (course) => {
  return {
    type: types.ADD_COURSE,
    payload: course,
  };
};

export const dropCourse = (removedCourse) => {
  return {
    type: types.DROP_COURSE,
    payload: removedCourse,
  };
};
export const searchCourse = (courseList) => {
  return {
    type: types.SEARCH_COURSE_LIST,
    payload: courseList,
  };
};
// NEEDS TO BE FINISHED
export const swapCourses = (previousCourse, newCourse) => {
  return {
    type: types.SWAP_COURSES,
    payload: [previousCourse, newCourse],
  };
};

export const fetchProfessorReviews = (reviews) => {
  return {
    type: types.FETCH_PROFESSOR_REVIEWS,
    payload: reviews,
  };
};
