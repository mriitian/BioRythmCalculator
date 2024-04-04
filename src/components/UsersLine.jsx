// UsersLine.jsx

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import userData from "../userData"; // Import user data
import ListGroup from "react-bootstrap/ListGroup";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function UsersLine({ setCurrent }) {
  const today = new Date();
  const [currentUser, setCurrentUser] = useState(null);
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState(userData); // Initialize users with imported data
  const [showadd, setShowadd] = useState(false);
  const [name, setName] = useState(null);
  const [bday, setBday] = useState(null);
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleUserClick = (user) => {
    setCurrentUser(user);
    setCurrent(user);
  };

  const handleAddChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "bday") {
      setBday(e.target.value);
    }
  };

  const handleShowadd = (e) => {
    setShow(false);
    setShowadd(true);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setShowadd(false);
    if (name && bday) {
      const newUser = { name: name, birthdate: bday };
      setUsers([...users, newUser]);
    }
  };
  const handleCloseadd = () => {
    setShowadd(false);
  };
  return (
    <div className="userline">
      <Button variant="primary" onClick={handleShow} style={{ width: "50vw" }}>
        {currentUser ? `Biorythm of ${currentUser.name}` : "Select the User"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select the Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup className="mb-3">
            {users.map((user, index) => (
              <ListGroup.Item
                key={index}
                onClick={() => handleUserClick(user)}
                active={currentUser && user.name === currentUser.name}
              >
                {user.name} - {user.birthdate}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="success" onClick={handleShowadd}>
            Add User
          </Button>
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
      <Modal show={showadd} onHide={handleCloseadd}>
        <Modal.Header closeButton>
          <Modal.Title>Select the Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddSubmit}>
            <Row className="mb-3">
              <Form.Control
                placeholder="Name"
                name="name"
                onChange={handleAddChange}
              />
            </Row>
            <Row className="mb-3">
              <Form.Control
                placeholder="Birth Date (yyyy-mm-dd)"
                name="bday"
                onChange={handleAddChange}
              />
            </Row>
            <Button variant="success" type="submit">
              Add User
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseadd}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseadd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
