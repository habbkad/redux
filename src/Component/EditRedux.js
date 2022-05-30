import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalEdit from "./Modal Edit";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Redux/Actions/Actions";

const EditRedux = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteUser(props.data.id));
  };

  return (
    <div>
      <h1>{props.data.name}</h1>
      <h2>{props.data.age}</h2>
      <button onClick={handleShow}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <hr />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalEdit data={props.data} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditRedux;
