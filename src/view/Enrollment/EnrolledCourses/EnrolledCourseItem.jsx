import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

/**
 * Represents a single list item in EnrolledCoursesView
 * This component controls how and what type of list item is displayed
 *
 * Receives props (fetched data) from EnrolledCoursesView and renders it
 */
const EnrolledCourseItem = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <li
        className="list-group-item list-group-item-action btn btn-outline-warning justify-content-between align-items-center d-flex rounded-top"
        data-toggle="modal"
        data-target="#cisc3440-modal"
        onClick={handleShow}
      >
        CISC. 3440: Machine Learning
        <span className="badge badge-success">3 credits</span>
      </li>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            CISC. 3440: Machine Learning <br />
            <span className="badge badge-success">3 credits</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          An introduction to machine learning for students with some
          mathematical maturity. Topics include: machine learning in relation to
          artificial intelligence, data sources and characteristics, linear and
          non-linear regression, machine learning concepts like the
          bias-variance tradeoff, linear and non-linear classification, hidden
          Markov models and the expectation-maximization algorithm, unsupervised
          learning, and deep learning. Examples will be drawn from several
          domains including natural language processing.
        </Modal.Body>
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
