import React, { useEffect } from "react";
import {
  fetchStudentThunk,
  dropCourseThunk,
} from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";
import EnrolledCoursesView from "./EnrolledCoursesView";
import { useSelector, useDispatch } from "react-redux";

/**
 * Smart container for enrolled courses component
 *
 * Fetches data and passes down props to:
 * - EnrolledCoursesView
 */
const EnrolledCourses = (props) => {
  const student = useSelector((state) => state.enrollment.student);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = firebase.auth().currentUser.uid;
    dispatch(fetchStudentThunk(id));
  }, [dispatch]);

  const dropCourse = (id, course) => {
    dispatch(dropCourseThunk(id, course));
  };

  return <EnrolledCoursesView student={student} dropCourse={dropCourse} />;
};

// Export our store-connected container by default
export default EnrolledCourses;
