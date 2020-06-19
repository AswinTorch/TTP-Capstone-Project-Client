import React from "react";
import EnrolledCoursesContainer from "./EnrolledCourses/EnrolledCoursesContainer";
import CourseListContainer from "./CourseList/CourseListContainer";
import Dropdown from "react-bootstrap/Dropdown";

const EnrollmentView = (props) => {
  return (
    <div className="container-fluid pt-3 px-4 pb-4">
      <div>
        <h2 className="text-muted">Enrollment</h2>
      </div>

      {/* Enrolled Courses List */}
      <EnrolledCoursesContainer />

      {/* Search Bar and Filter */}
      <div className="mt-4 border-0">
        <div className="pt-4 pb-2">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary my-2 my-sm-0 mr-2">
              Search
            </button>
            <Dropdown>
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

      {/* Courses List */}
      <CourseListContainer />
    </div>
  );
};

export default EnrollmentView;
