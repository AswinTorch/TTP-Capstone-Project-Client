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

// NEEDS TO BE FINISHED
export const swapCourse = () => {};

export const fetch = (reviews) => {
  return {
    type: types.FETCH_PROFESSOR_REVIEWS,
    payload: reviews,
  };
};
