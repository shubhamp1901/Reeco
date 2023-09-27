import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalExample({ handleClose, show, data }) {
  useEffect(() => {
    console.log(data);
  });

  function statusChangeToMissing(id) {
    if (data?.id == id) {
      data.status = "Missing";
    }

    handleClose();
  }

  function statusChangeToMissingUrgent(id) {
    if (data?.id == id) {
      data.status = "Missing-Urgent";
    }

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Missing Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Is ${data?.product_name.slice(
          0,
          20
        )}...Urgent?`}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => statusChangeToMissing(data.id)}
          >
            No
          </Button>
          <Button
            variant="primary"
            onClick={() => statusChangeToMissingUrgent(data.id)}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExample;
