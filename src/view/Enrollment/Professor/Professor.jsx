import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfessorReviewsThunk } from "../../../state/enrollment/thunks";
import "../Professor/Professor.css";

const Professor = (props) => {
  // State to track modal open/close button click
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // Function to fetch professor reviews when professor name is clicked on
  const handleShow = async () => {
    await dispatch(fetchProfessorReviewsThunk(props.prof));
    setShow(true);
  };

  // Mapping state and accessing dispatch from Redux
  const reviews = useSelector((state) => state.enrollment.professorReviews);
  const dispatch = useDispatch();

  return (
    <>
      <span
        className="badge badge-secondary mr-2 btn"
        key={props.prof}
        onClick={handleShow}
      >
        {props.prof}{" "}
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="custom-modal-styling-title">
            Reviews for {props.prof}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {reviews.length !== 0 ? (
            reviews.map((review, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item list-group-item-action justify-content-between align-items-center d-flex rounded py-4 border-bottom"
                >
                  {review}
                </li>
              );
            })
          ) : (
            <li className="list-group-item list-group-item-action justify-content-between align-items-center d-flex rounded py-4 border-0">
              There are no reviews for this professor.
            </li>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Professor;
