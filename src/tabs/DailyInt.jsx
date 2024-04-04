import React, { useState } from "react";
import BiorythmBar from "../components/BiorythmBar";
import Form from "react-bootstrap/Form";
import ReactDatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DailyInt({ currentUser }) {
  const today = new Date();
  const [date, setDate] = useState(
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeDate = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Button variant="primary" onClick={handleShow}>
        Date : {date}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set the Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="date" onChange={handleChangeDate} />
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
      <BiorythmBar date={date} currentUser={currentUser} />
    </div>
  );
}
