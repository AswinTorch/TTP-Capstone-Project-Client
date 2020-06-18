import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

/**
 * Represents a single list item in EnrolledCoursesView
 * This component controls how and what type of list item is displayed
 *
 * Receives props (fetched data) from EnrolledCoursesView and renders it
 */
const EnrolledCourseItem = ({ course }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Modal.Body>{course.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Swap
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Drop
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EnrolledCourseItem;
