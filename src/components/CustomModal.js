import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CustomModal({ isOpened, setIsOpened }) {
  const handleClose = () => setIsOpened(false);

  return (
    <Modal show={isOpened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sorry!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Couldn't find any data attached to this point!</Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
