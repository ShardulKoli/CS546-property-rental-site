import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";

// const property = {
//     _id: 1,
//     name: "Property 1",
//     address: "Some Address in Heights",
//     pincode: "07307",
//     city: "Jersey City",
//     state: "New Jersey",
//     type: "Apartment",
//     beds: 3,
//     baths: 2,
//     balcony: 1,
//     centralAir: false,
//     petFriendly: true,
//     partyFriendly: true,
//     garrage: false,
//     nearBySchools: "Stevens",
//     nearByMedical: "Pharmacy",
//     nearByCommute: "Commute list",
//     rent: 2000,
//     brokerage: 500,
//     deposit: 500,
//     minimumLeasePeriod: 12,
//     images: [],
//     broker: 1,
//     status: true,
//     isActive: true,
//   };

export const CreateListingModal = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [balcony, setBalcony] = useState("");
  const [centralAir, setCentralAir] = useState("");
  const [petFriendly, setPetFriendly] = useState("");

  // handle errors
  const [errors, setErrors] = useState(null);

  const checkProrertyDetails = (check) => {
    if (check) {
      return {
        name: "enter a valid name",
      };
    } else {
      return null;
    }
  };

  const createPropertyDetails = () => {
    // TODO: check for errors here with a valid function
    let checks = checkProrertyDetails(true);

    const propertyDetials = {
      name: name,
      address: address,
      pincode: pincode,
      city: city,
    };

    if (!checks) {
      setErrors(null);
      console.log(propertyDetials);
    } else {
      setErrors(checks);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form stuff */}

          <Form>
            <div>{name}</div>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Name of the Property"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Property Name"
                />
                <Form.Text className="text-muted">
                  {errors ? errors.name : null}
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Address of the Property"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Property Address"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Pincode"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter Pincode"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="City"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter Pincode"
                />
              </FloatingLabel>
            </Form.Group>

            <Button variant="success" onClick={() => createPropertyDetails()}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
