import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SwapCourseView = ({ course, enrolledCourses }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSwap = (enrolledCourse) => {
    // Handle the swap here by passing the enrolledCourse and the course prop in this view
    // a thunk function to swap

    // And then modal will close
    handleClose();
  };

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Swap
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Swap With Which Course?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {enrolledCourses.map((enrolledCourse) => {
            return (
              <li
                key={
                  enrolledCourse.course_identifier +
                  enrolledCourse.course_number
                }
                className="list-group-item list-group-item-action btn justify-content-between align-items-center d-flex rounded py-4 border-0"
                onClick={() => handleSwap(enrolledCourse)}
              >
                {enrolledCourse.course_identifier}{" "}
                {enrolledCourse.course_number}: {enrolledCourse.course_name}
                <span className="badge badge-success">
                  {Number(enrolledCourse.units)} credits
                </span>
              </li>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SwapCourseView;
