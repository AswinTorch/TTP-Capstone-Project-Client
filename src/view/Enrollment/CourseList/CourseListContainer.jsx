import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllCoursesThunk } from "../../../state/enrollment/thunks";
import CourseListView from "./CourseListView";

/**
 * Smart container for course list component
 *
 * Fetches data and passes down props to:
 * - CourseListView
 */

class CourseListContainer extends Component {
  // Fetches data from the server on first render of component
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    return <CourseListView courses={this.props.courses} />;
  }
}

// Map state to props
const mapState = (state) => {
  let courses = state.enrollment.allCourses;

  return {
    courses,
  };
};

// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCourses: () => dispatch(fetchAllCoursesThunk()),
  };
};

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(CourseListContainer);