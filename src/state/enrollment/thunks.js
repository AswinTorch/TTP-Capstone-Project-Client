import axios from "axios";

import {
  fetchEnrolledCourses,
  fetchAllCourses,
  fetchStudent,
  addCourse,
} from "./actions";

// Thunk creators for enrollment
export const fetchEnrolledCoursesThunk = ([courseIds]) => (dispatch) => {
  return axios
    .get(`/api/students/addCourse/${courseIds[0]}/`)
    .then((res) => res.data)
    .then((courses) => dispatch(fetchEnrolledCourses(courses)))
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
  try {
    const response = await axios.get(`/api/students/${id}`);
    const student = response.data;
    dispatch(fetchStudent(student));
  } catch (error) {
    console.error(error);
  }
};

// Thunk to add course selected from course list to student's enrolled courses
export const addCourseThunk = (id, course) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/students/${id}/addcourse`, course);
    const addedCourse = response.data;
    console.log(addedCourse);
    dispatch(addCourse(addedCourse));
  } catch (error) {
    console.error(error);
  }
};
