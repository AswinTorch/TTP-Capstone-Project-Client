import axios from "axios";

import {
  fetchRegisteredCourses,
  fetchAllCourses,
  fetchStudent,
} from "./actions";

// Thunk creators for enrollment
export const fetchRegisteredCoursesThunk = (studentId) => (dispatch) => {
  return axios
    .get(`/api/students/addCourse/${studentId}/`)
    .then((res) => res.data)
    .then((courses) => dispatch(fetchRegisteredCourses(courses)))
    .catch((err) => console.error(err));
};

// Thunk to fetch all courses in the database
export const fetchAllCoursesThunk = () => (dispatch) => {
  return axios
    .get("/api/courses/?limit=10")
    .then((res) => res.data.data)
    .then((courses) => {
      dispatch(fetchAllCourses(courses));
    })
    .catch((err) => console.error(err));
};

// Thunk to fetch the current student model of signed in user
export const fetchStudentThunk = (id) => async (dispatch) => {
  const student = await axios.get(`/api/students/id/${id}`);
  dispatch(fetchStudent(student));
};
