import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchStudentThunk,
  dropCourseThunk,
} from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";
import EnrolledCoursesView from "./EnrolledCoursesView";

/**
 * Smart container for enrolled courses component
 *
 * Fetches data and passes down props to:
 * - EnrolledCoursesView
 */
class EnrolledCoursesContainer extends Component {
  async componentDidMount() {
    const id = firebase.auth().currentUser.uid;
    await this.props.fetchStudent(id);
  }

  render() {
    return (
      <EnrolledCoursesView
        student={this.props.student}
        dropCourse={this.props.dropCourse}
      />
    );
  }
}

// Map state to props
const mapState = (state) => {
  return {
    student: state.enrollment.student,
  };
};

// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    dropCourse: (id, course) => dispatch(dropCourseThunk(id, course)),
  };
};

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(EnrolledCoursesContainer);
