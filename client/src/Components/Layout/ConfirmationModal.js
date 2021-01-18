import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export default function ConfirmationModal(props) {
    

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          By hitting submit you will send an email with the data currently
          loaded in the form.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={props.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
