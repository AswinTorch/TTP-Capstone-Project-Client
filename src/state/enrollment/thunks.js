import axios from "axios";

import { fetchRegisteredCourses, fetchAllCourses } from "./actions";

// Thunk creators for enrollment
export const fetchRegisteredCoursesThunk = (studentId) => (dispatch) => {
  return axios
    .get(`/api/students/${studentId}/courses`)
    .then((res) => res.data)
    .then((courses) => dispatch(fetchRegisteredCourses(courses)))
    .catch((err) => console.error(err));
};

export const fetchAllCoursesThunk = () => (dispatch) => {
  return axios
    .get("/api/courses/?limit=10")
    .then((res) => res.data.data)
    .then((courses) => {
      dispatch(fetchAllCourses(courses));
    })
    .catch((err) => console.error(err));
};
