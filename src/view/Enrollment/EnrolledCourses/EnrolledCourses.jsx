import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStudentThunk,
  dropCourseThunk,
} from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function useStudent(studentID)
{
    const student = useSelector((state) => state.enrollment.student);
    const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch(fetchStudentThunk(studentID));
    });

    return student;
}

/**
 * Smart container for enrolled courses component
 *
 * Fetches data and passes down props to:
 * - EnrolledCoursesView
 */
const EnrolledCourses = (props) => 
{
    const student = useStudent(firebase.auth().currentUser.uid);
    const dispatch = useDispatch();

    const dropCourse = (id, course) => 
    {
        dispatch(dropCourseThunk(id, course));
    };

    return <EnrolledCoursesView student={student} dropCourse={dropCourse} />;
};

/**
 * Represents the entire view of the user's Enrolled Courses
 * This component controls the type of display to use
 *
 * Receives props (fetched data) from EnrolledCoursesContainer
 * Passes props (fetched data) down to EnrolledCourseItem to generate
 */
const EnrolledCoursesView = (props) => {
  return (
    <div className="card mt-4 shadow rounded border-0">
      <h5 className="card-header text-primary">Enrolled Courses</h5>
      <div className="">
        <ul className="list-group rounded">
          <div>
            {props.student.enrolled_courses &&
            props.student.enrolled_courses.length !== 0 ? (
              // Shows fetched data if it exists
              props.student.enrolled_courses.map((course) => (
                <EnrolledCourseItem
                  course={course}
                  key={course.course_name}
                  dropCourse={props.dropCourse}
                />
              ))
            ) : (
              // Spinner shows if data isn't fetched or doesn't exist
              <p className="pl-4 pt-3 pb-2">
                You're not enrolled in any courses.
              </p>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

/**
 * Represents a single list item in EnrolledCoursesView
 * This component controls how and what type of list item is displayed
 *
 * Receives props (fetched data) from EnrolledCoursesView and renders it
 */
const EnrolledCourseItem = ({ course, dropCourse }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDrop = async () => {
    const id = await firebase.auth().currentUser.uid;
    dropCourse(id, course);
  };

  return (
    <div>
      <li
        className="list-group-item list-group-item-action btn justify-content-between align-items-center d-flex rounded py-4 border-bottom-0"
        onClick={handleShow}
      >
        {course.course_identifier} {course.course_number}: {course.course_name}
        <span className="badge badge-success">
          {Number(course.units)} credits
        </span>
      </li>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {course.course_identifier} {course.course_number}:{" "}
            {course.course_name} <br />
            <span className="badge badge-success">
              {Number(course.units)} credits
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{course.description}</p>
          {course.lecturer ? (
            <p>
              Available Professors:{" "}
              {course.lecturer.map((prof) => (
                <span className="badge badge-secondary mr-2" key={prof}>
                  {prof}{" "}
                </span>
              ))}
            </p>
          ) : (
            <p>
              Available Professors:{" "}
              <span className="badge badge-secondary mr-2">Staff</span>
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDrop}>
            Drop
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Export our store-connected container by default
export default EnrolledCourses;
