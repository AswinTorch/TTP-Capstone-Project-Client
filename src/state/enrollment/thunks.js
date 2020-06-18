import axios from "axios";

import {
  fetchAllCourses,
  fetchStudent,
  addCourse,
  dropCourse,
} from "./actions";

// THUNKS

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
    dispatch(addCourse(addedCourse));
  } catch (error) {
    console.error(error);
  }
};

// Thunk to remove selected course from student's enrolled courses
export const dropCourseThunk = (id, course) => async (dispatch) => {
  try {
    const response = await axios.put(
      `/api/students/${id}/removecourse`,
      course
    );
    const updatedStudent = response.data;
    dispatch(dropCourse(updatedStudent));
  } catch (error) {
    console.error(error);
  }
};
