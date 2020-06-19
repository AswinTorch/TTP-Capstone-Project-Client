import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import firebase from "../../../firebase";

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
        className="list-group-item list-group-item-action btn btn-outline-warning justify-content-between align-items-center d-flex rounded"
        data-toggle="modal"
        data-target="#cisc3440-modal"
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
          {course.lecturer && (
            <p>
              Available Professors:{" "}
              {course.lecturer.map((prof) => (
                <span className="badge badge-secondary mr-2" key={prof}>
                  {prof}{" "}
                </span>
              ))}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Swap
          </Button>
          <Button variant="danger" onClick={handleDrop}>
            Drop
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EnrolledCourseItem;
