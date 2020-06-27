import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCoursesThunk,
  addCourseThunk,
  fetchStudentThunk,
} from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";
import _ from "lodash";

import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import SwapCourseView from "./SwapCourseView";
import ProfessorView from "../Professor/ProfessorView.jsx";

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

/**
 * Represents the entire view of the Course List.
 * This component controls the type of display to use
 *
 * Receives props (fetched data) from CourseListContainer
 * Passes props (fetched data) down to CourseListItem to generate
 */
const CourseListView = ({ courses, addCourse, enrolledCourses }) => {
  return (
    <div className="card card-block mt-4 shadow border-0 rounded">
      <h5 className="card-header text-info">Course List</h5>
      <div className="rounded">
        <Accordion className="rounded-0">
          {courses && courses.length !== 0 ? (
            // Shows fetched data if it exists
            courses.map((course, index) => (
              <CourseListItem
                key={course.course_identifier + course.course_number}
                course={course}
                index={index}
                addCourse={addCourse}
                enrolledCourses={enrolledCourses}
              />
            ))
          ) : (
            // Spinner shows if data isn't fetched or doesn't exist
            <div className="text-center">
              <Spinner animation="grow" variant="secondary" className="mr-2" />
              <Spinner animation="grow" variant="secondary" className="mr-2" />
              <Spinner animation="grow" variant="secondary" className="" />
            </div>
          )}
        </Accordion>
      </div>
    </div>
  );
};

/**
 * Represents a single list item in CourseListView
 * This component controls how and what type of list item is displayed
 *
 * Receives props (fetched data) from CourseListView and renders it
 */
const CourseListItem = ({ course, index, addCourse, enrolledCourses }) => {
  const [isLoading, setLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Runs on initial render of component and when state is updated
  useEffect(() => {
    // Function that calls the redux addCourse with current user id and course to add to enrolled courses
    async function addCourseToEnrolled() {
      try {
        const id = await firebase.auth().currentUser.uid;
        addCourse(id, course);
      } catch (error) {
        console.error(error);
      }
    }

    if (enrolledCourses) {
      // Checks if current course is already in enrolled courses list of student
      for (let enrolledCourse of enrolledCourses) {
        if (_.isEqual(enrolledCourse, course)) {
          setIsEnrolled(true);
          break;
        } else if (!_.isEqual(enrolledCourse, course) && isEnrolled) {
          setIsEnrolled(false);
        }
      }
    }

    // Handles loading "animation" of button || Barely noticable
    if (isLoading) {
      addCourseToEnrolled().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading, addCourse, course, enrolledCourses, isEnrolled]);
  const handleClick = () => setLoading(true);

  return (
    <Card>
      <Accordion.Toggle
        as={Card.Body}
        variant="link"
        eventKey={index}
        className="btn btn-light rounded-0"
      >
        <div className="d-flex justify-content-between align-items-center rounded-0">
          <span className="">
            {course.course_identifier} {course.course_number}:{" "}
            {course.course_name}
          </span>
          <span
            className="badge badge-success d-flex align-items-center"
            style={{ maxHeight: 20 }}
          >
            {Number(course.units)} credits
          </span>
        </div>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={index}>
        <Card.Header className="border border-bottom-0 border-left-0 border-right-0">
          <p>{course.description}</p>
          {course.lecturer ? (
            <p>
              Available Professors:{" "}
              {course.lecturer.map((prof) => (
                <ProfessorView prof={prof} key={prof} />
              ))}
            </p>
          ) : (
            <p>
              Available Professors:{" "}
              <span className="badge badge-secondary mr-2">Staff</span>
            </p>
          )}
          <div className="form-inline mb-2">
            <Button
              variant={
                isLoading || isEnrolled ? "outline-danger" : "outline-success"
              }
              disabled={isLoading || isEnrolled}
              onClick={!isLoading && !isEnrolled ? handleClick : null}
              className="mr-2"
            >
              {isLoading ? "Enrolling..." : isEnrolled ? "Enrolled" : "Enroll"}
            </Button>
            {!isEnrolled && enrolledCourses && enrolledCourses.length !== 0 && (
              <SwapCourseView
                course={course}
                enrolledCourses={enrolledCourses}
              />
            )}
          </div>
        </Card.Header>
      </Accordion.Collapse>
    </Card>
  );
};

// Export our store-connected container by default
export default CourseListContainer;
