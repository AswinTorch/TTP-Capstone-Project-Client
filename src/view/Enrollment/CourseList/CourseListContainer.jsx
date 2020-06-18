import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllCoursesThunk,
  addCourseThunk,
  fetchStudentThunk,
} from "../../../state/enrollment/thunks";
import CourseListView from "./CourseListView";
import firebase from "../../../firebase";

/**
 * Smart container for course list component
 *
 * Fetches data and passes down props to:
 * - CourseListView
 */

class CourseListContainer extends Component {
  // Fetches data from the server on first render of component
  async componentDidMount() {
    this.props.fetchCourses();

    const id = firebase.auth().currentUser.uid;
    await this.props.fetchStudent(id);
  }

  render() {
    return (
      <CourseListView
        courses={this.props.courses}
        addCourse={this.props.addCourse}
        enrolledCourses={this.props.student.enrolled_courses}
      />
    );
  }
}

// Map state to props
const mapState = (state) => {
  let courses = state.enrollment.allCourses;
  let student = state.enrollment.student;

  return {
    courses,
    student,
  };
};

// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    // Uncommment this and remove other function when courses list is needed;
    // Doing this to avoid overuse of firebase calls
    fetchCourses: () => dispatch(fetchAllCoursesThunk()),
    // fetchCourses: () => console.log("Temp"),
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    addCourse: (id, course) => dispatch(addCourseThunk(id, course)),
  };
};

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(CourseListContainer);
