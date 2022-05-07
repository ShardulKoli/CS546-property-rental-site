import React, { useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import TextField from "@mui/material/TextField/TextField";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Navbar,
  Container,
  Nav,
  Modal,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import styles from "./Filters.module.css";
import filter from "../assets/validation/filter";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";

export const Filters = ({ getAllProperties, properties, setProperties }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setPet(false);
    setParty(false);
    setGarrage(false);
    setcentralAir(false);
    setBalcony(null);
    setBath(null);
    setBed(null);
    setCity(null);
    setLeasePeriod(null);
    setRent(null);
    setPincode(null);
    setLeasePeriod(null);
    setRented(null);
  };
  const handleShow = () => {
    getAllProperties();
    setShow(true);
  };
  // const [localProperties, setLocalProperties] = useState(properties);
  // const getAllProperties = () => {
  //   axios
  //     .get("/property/getAllProperties")
  //     .then((res) => {
  //       console.log("Properties");
  //       console.log(res.data);
  //       setProperties(res.data);
  //     })
  //     .catch((e) => {
  //       console.log(e.response.data.errorMessage);
  //     });
  // };
  const [genericSearch, setSearch] = useState("");
  const [pet, setPet] = useState(false);
  const [party, setParty] = useState(false);
  const [centralAir, setcentralAir] = useState(false);
  const [garrage, setGarrage] = useState(false);
  const [balcony, setBalcony] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [leasePeriod, setLeasePeriod] = useState(null);
  const [bed, setBed] = useState(null);
  const [bath, setBath] = useState(null);
  const [rent, setRent] = useState(null);
  const [rented, setRented] = useState(false);

  // useEffect(() => {
  //   setLocalProperties(homePropertyList);
  // }, []);

  const handleSearch = () => {
    const map1 = new Map();
    map1.set("balcony", balcony);
    map1.set("baths", bath);
    map1.set("beds", bed);
    map1.set("centralAir", centralAir);

    map1.set("city", city);
    map1.set("garrage", garrage);

    map1.set("partyFriendly", party);
    map1.set("petFriendly", pet);

    map1.set("pincode", pincode);
    map1.set("state", state);
    map1.set("rent", rent);
    map1.set("rentedOut", rented);
    //console.log(map1);
    //console.log("Properties");
    //console.log(properties);
    // console.log(localProperties);
    // console.log(map1);
    let result = filter.filterData(properties, map1);
    //console.log(result);
    handleClose();
    setProperties(result);
  };
  //const [checked,setChecked]= useState(false);

  const clearFilters = () => {
    getAllProperties();
  };

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
            <div style={{ marginLeft: "10px" }}>Clear Filters</div>
            <div>
              <ClearIcon
                onClick={clearFilters}
                sx={{ "&:hover": { color: "skyblue" } }}
              ></ClearIcon>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pick Your Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Group className="mb-3" controlId="search">
              <FloatingLabel
                controlId="floatingInput"
                label="Search"
                className="mb-3"
              >
                <Form.Control
                  type="input"
                  placeholder="Enter SearchTerm"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="rentedOut">
              <FloatingLabel
                controlId="floatingInput"
                label=""
                className="mb-3"
              >
                <Form.Check
                  label="Hide Rented Out"
                  value={rented}
                  onChange={(e) => setRented(!rented)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="petFriendly">
              <FloatingLabel
                controlId="floatingInput"
                label=""
                className="mb-3"
              >
                <Form.Check
                  label="Pet Friendly"
                  value={pet}
                  onChange={(e) => setPet(!pet)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="partyFriendly">
              <FloatingLabel
                controlId="floatingInput"
                label=""
                className="mb-3"
              >
                <Form.Check
                  label="Party Friendly"
                  value={party}
                  onChange={(e) => setParty(!party)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="centralAir">
              <FloatingLabel
                controlId="floatingInput"
                label=""
                className="mb-3"
              >
                <Form.Check
                  label="Central Air"
                  value={centralAir}
                  onChange={(e) => setcentralAir(!centralAir)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="garrage">
              <FloatingLabel
                controlId="floatingInput"
                label=""
                className="mb-3"
              >
                <Form.Check
                  label="Garrage"
                  value={garrage}
                  onChange={(e) => setGarrage(!garrage)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="bed">
              <FloatingLabel
                controlId="floatingInput"
                label="Bed"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Enter Bed"
                  onChange={(e) => setBed(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="bath">
              <FloatingLabel
                controlId="floatingInput"
                label="Bath"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Enter Bath"
                  onChange={(e) => setBath(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="balcony">
              <FloatingLabel
                controlId="floatingInput"
                label="Balcony"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Enter Balcony"
                  onChange={(e) => setBalcony(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="lease">
              <FloatingLabel
                controlId="floatingInput"
                label="Lease Period"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Enter Lease Period"
                  onChange={(e) => setLeasePeriod(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="rent">
              <FloatingLabel
                controlId="floatingInput"
                label="Rent"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Enter Rent"
                  onChange={(e) => setRent(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="pincode">
              <FloatingLabel
                controlId="floatingInput"
                label="Pin Code"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="Enter Pincode"
                  onChange={(e) => setPincode(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <FloatingLabel
                controlId="floatingInput"
                label="City"
                className="mb-3"
              >
                <Form.Control
                  type="input"
                  placeholder="Enter City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="state">
              <FloatingLabel
                controlId="floatingInput"
                label="State"
                className="mb-3"
              >
                <Form.Control
                  type="input"
                  placeholder="Enter State"
                  onChange={(e) => setState(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSearch}>
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
