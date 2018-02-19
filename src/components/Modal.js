import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modal";
const ModalUI = props => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">{props.errorTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.errorMessage} </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUI;
