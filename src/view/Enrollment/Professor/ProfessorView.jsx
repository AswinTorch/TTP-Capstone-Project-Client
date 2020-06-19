import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ProfessorView = ({ prof }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span
        className="badge badge-secondary mr-2 btn"
        key={prof}
        onClick={handleShow}
      >
        {prof}{" "}
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reviews for {prof}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((comment) => {
            return (
              <li className="list-group-item list-group-item-action justify-content-between align-items-center d-flex rounded py-4 border-0">
                {comment}
              </li>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfessorView;
