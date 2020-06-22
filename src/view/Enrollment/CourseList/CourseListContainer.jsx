import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllCoursesThunk,
  addCourseThunk,
  fetchStudentThunk,
} from "../../../state/enrollment/thunks";
import CourseListView from "./CourseListView";
import firebase from "../../../firebase";
import Dropdown from "react-bootstrap/Dropdown";

/**
 * Smart container for course list component
 *
 * Fetches data and passes down props to:
 * - CourseListView
 */

class CourseListContainer extends Component {
  state = {
    searchString: "",
  };

  handleChange = async (e) => {
    const searchString = e.target.value;
    this.setState({ searchString });
  };

  // Fetches data from the server on first render of component
  async componentDidMount() {
    this.props.fetchCourses();

    const id = firebase.auth().currentUser.uid;
    await this.props.fetchStudent(id);
  }

  render() {
    // Filtering by course id + num
    // Add filter by prof name, course name
    const filteredCourses = this.props.courses.filter((course) => {
      const courseName = (
        course.course_identifier +
        " " +
        course.course_number
      ).toLowerCase();
      // Add filter by close/open when filter is selected :
      return (
        courseName.indexOf(this.state.searchString.toLowerCase()) !== -1 ||
        course.course_name
          .toLowerCase()
          .indexOf(this.state.searchString.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        {/* Search Bar and Filter */}
        <div className="mt-4 border-0">
          <div className="pt-4 pb-2">
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                className="form-control mb-2 mr-sm-0"
                type="search"
                value={this.state.searchString}
                onChange={this.handleChange}
                placeholder="Search"
                aria-label="Search"
              />

              <Dropdown className="mb-2">
                {" "}
                &emsp;
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Filter By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">All Courses</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Open Courses</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </form>
          </div>
        </div>
        <CourseListView
          courses={filteredCourses}
          addCourse={this.props.addCourse}
          enrolledCourses={this.props.student.enrolled_courses}
        />
      </div>
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
    // Doing this to avoid overuse of firebase calls
    // fetchCourses: () => console.log("Temp"),
    fetchCourses: () => dispatch(fetchAllCoursesThunk()),
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    addCourse: (id, course) => dispatch(addCourseThunk(id, course)),
  };
};

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(CourseListContainer);
