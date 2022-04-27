import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import styles from "./Filters.module.css";

export const Filters = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav> </Nav>
          <Nav>
            <div>Filters</div>
            <div>
              <FilterListIcon
                onClick={handleShow}
                sx={{ "&:hover": { color: "skyblue" } }}
              ></FilterListIcon>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pick Your Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>Add filtering options here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
