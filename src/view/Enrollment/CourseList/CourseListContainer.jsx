import React, { useState, useEffect } from "react";
import {
  fetchAllCoursesThunk,
  addCourseThunk,
  fetchStudentThunk,
} from "../../../state/enrollment/thunks";
import CourseListView from "./CourseListView";
import firebase from "../../../firebase";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";

/**
 * Smart container for course list component
 *
 * Fetches data and passes down props to:
 * - CourseListView
 */

const CourseListContainer = (props) => {
  const [searchString, setSearchString] = useState("");
  const courses = useSelector((state) => state.enrollment.allCourses);
  const student = useSelector((state) => state.enrollment.student);
  const dispatch = useDispatch();
  const id = firebase.auth().currentUser.uid;

  const handleChange = async (e) => {
    setSearchString(e.target.value);
  };

  // Function to add course || declared here to pass as prop to view component
  const addCourse = (id, course) => {
    dispatch(addCourseThunk(id, course));
  };

  // Fetches data from the server on first render of component
  useEffect(() => {
    dispatch(fetchAllCoursesThunk());

    dispatch(fetchStudentThunk(id));
  }, [id, dispatch]);

  // Filtering by course id + num
  // Add filter by prof name, course name
  const filteredCourses = courses.filter((course) => {
    const courseName = (
      course.course_identifier +
      " " +
      course.course_number
    ).toLowerCase();
    // Add filter by close/open when filter is selected :
    return (
      courseName.indexOf(searchString.toLowerCase()) !== -1 ||
      course.course_name.toLowerCase().indexOf(searchString.toLowerCase()) !==
        -1
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
              value={searchString}
              onChange={handleChange}
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
        addCourse={addCourse}
        enrolledCourses={student.enrolled_courses}
      />
    </div>
  );
};

// Export our store-connected container by default
export default CourseListContainer;
