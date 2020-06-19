import React, { useState } from "react";
import EnrolledCoursesContainer from "./EnrolledCourses/EnrolledCoursesContainer";
import { getSearchThunk } from "../../state/enrollment/thunks";
import CourseListContainer from "./CourseList/CourseListContainer";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";

const EnrollmentView = (props) => {
  const [presence, setPresence] = useState(false);
  const handleChange = async (event) => {
    const searchString = event.target.value;
    await dispatch(getSearchThunk(searchString));
    setPresence(true);
  };
  const searchList = useSelector((state) => state.enrollment.searchList);
  const dispatch = useDispatch();
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
            <Dropdown key="left">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  onChange={handleChange}
                  placeholder="Search"
                  aria-label="Search"
                />
                <Dropdown.Menu>
                  {presence ? (
                    searchList.map((item) => {
                      return (
                        <Dropdown.Item>
                          {item.data.course_identifier}{" "}
                          {item.data.course_number} : {item.data.course_name}
                        </Dropdown.Item>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
            <Dropdown>
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

      {/* Courses List */}
      <CourseListContainer />
    </div>
  );
};

export default EnrollmentView;
