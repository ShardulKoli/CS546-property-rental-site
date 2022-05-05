import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  FloatingLabel,
  ButtonGroup,
  ToggleButton,
  Alert,
} from "react-bootstrap";
import axios from "axios";

export const EditListingModal = ({
  show,
  handleClose,
  loginToken,
  getUser,
  propertyDetails,
}) => {
  // console.log(loginToken);
  const [name, setName] = useState(propertyDetails.name);
  const [address, setAddress] = useState(propertyDetails.address);
  const [pincode, setPincode] = useState(propertyDetails.pincode);
  const [city, setCity] = useState(propertyDetails.city);
  const [state, setState] = useState(propertyDetails.state);
  const [type, setType] = useState(propertyDetails.type);
  const [beds, setBeds] = useState(propertyDetails.beds);
  const [baths, setBaths] = useState(propertyDetails.bath);
  const [balcony, setBalcony] = useState(propertyDetails.balcony);
  const [centralAir, setCentralAir] = useState(propertyDetails.centralAir);
  const [petFriendly, setPetFriendly] = useState(propertyDetails.petFriendly);
  const [partyFriendly, setPartyFriendly] = useState(
    propertyDetails.partyFriendly
  );
  const [garrage, setGarrage] = useState(propertyDetails.garrage);
  const [nearBySchools, setNearBySchools] = useState(
    propertyDetails.nearBySchools
  );
  const [nearByMedical, setNearByMedical] = useState(
    propertyDetails.nearByMedical
  );
  const [nearByCommute, setNearByCommute] = useState(
    propertyDetails.nearByCommute
  );
  const [rent, setRent] = useState(propertyDetails.rent);
  const [brokerage, setBrokerage] = useState(propertyDetails.brokerage);
  const [deposit, setDeposit] = useState(propertyDetails.deposit);
  const [minimumLeasePeriod, setMinimumLeasePeriod] = useState(
    propertyDetails.minimumLeasePeriod
  );
  // const [images, setImages] = useState(null);
  const [imageOne, setImageOne] = useState(propertyDetails.images[0]);
  const [imageTwo, setImageTwo] = useState(propertyDetails.images[1]);
  const [imageThree, setImageThree] = useState(propertyDetails.images[2]);
  const [broker, setBroker] = useState(loginToken.username);
  //   const [status, setStatus] = useState(true);

  // handle errors
  const [errors, setErrors] = useState(null);
  const [requestMessage, setRequestMessage] = useState(null);

  const checkPropertyDetails = (check) => {
    if (check) {
      return {
        name: "enter a valid name",
      };
    } else {
      return null;
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log("Called", reader);
        baseURL = reader.result;
        // console.log(baseURL);
        resolve(baseURL);
      };
      // console.log(fileInfo);
    });
  };

  const setImageToBase64 = (file, imageSetter) => {
    getBase64(file).then((res) => {
      imageSetter(res);
    });
  };

  const editPropertyDetails = () => {
    // convert images to base 64 to store in the db

    // getBase64(imageOne).then((res) => {
    //   console.log("Base 64");
    //   console.log(res);
    //   setImageOne(res);
    // });

    const propertyDetails = {
      name: name,
      address: address,
      pincode: pincode,
      city: city,
      state: "New Jersey",
      type: type,
      beds: beds,
      bath: baths,
      balcony: balcony,
      centralAir: centralAir,
      petFriendly: petFriendly,
      partyFriendly: partyFriendly,
      garrage: garrage,
      nearBySchools: nearBySchools,
      nearByMedical: nearByMedical,
      nearByCommute: nearByCommute,
      rent: rent,
      brokerage: brokerage,
      deposit: deposit,
      minimumLeasePeriod: minimumLeasePeriod,
      images: [imageOne, imageTwo, imageThree],
      broker: broker,
      status: false,
      isActive: true,
    };

    // TODO: check for errors here with a valid function
    // let checks = checkPropertyDetails(true);
    // if (!checks) {
    //   setErrors(null);
    //   console.log(propertyDetials);
    // } else {
    //   setErrors(checks);
    // }

    console.log(propertyDetails);
    console.log(propertyDetails.images);

    // axios
    //   .post("/property/createProperty", propertyDetails)
    //   .then((res) => {
    //     // setRequestMessage("Property created successfully");
    //     getUser(loginToken.username);
    //     handleClose();
    //   })
    //   .catch((e) => {
    //     setRequestMessage(e.response.data.errorMessage);
    //   });
  };

  // const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Yes", value: true },
    { name: "No", value: false },
  ];

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit the Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form stuff */}

          {/* {imageOne ? (
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(imageOne)}
            />
          ) : null} */}

          {/* {imageOne ? (
            <img alt="not fount" width={"250px"} src={imageOne} />
          ) : null} */}

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
                  value={name}
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
                  value={address}
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
                  value={pincode}
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
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter City"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="State"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter State"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Type"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Enter Type"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Beds"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  placeholder="Enter Number of Beds"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Baths"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={baths}
                  onChange={(e) => setBaths(e.target.value)}
                  placeholder="Enter Number of Baths"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Balconies"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={balcony}
                  onChange={(e) => setBalcony(e.target.value)}
                  placeholder="Enter Number of Balconies"
                />
              </FloatingLabel>

              <div style={{ marginTop: "5px" }}>
                <div>Central Air</div>
                <ButtonGroup id="central">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={`central-${idx}`}
                      id={`central-${idx}`}
                      type="radio"
                      variant={idx === 0 ? "outline-success" : "outline-danger"}
                      name="central"
                      value={radio.value}
                      checked={centralAir === radio.value}
                      onChange={(e) => {
                        setCentralAir(
                          e.currentTarget.value === "true" ? true : false
                        );
                      }}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>

              <div style={{ marginTop: "20px" }}>
                <div>Pet Friendly</div>
                <ButtonGroup id="pets">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={`pet-${idx}`}
                      id={`pet-${idx}`}
                      type="radio"
                      variant={idx === 0 ? "outline-success" : "outline-danger"}
                      name="pets"
                      value={radio.value}
                      checked={petFriendly === radio.value}
                      onChange={(e) => {
                        setPetFriendly(
                          e.currentTarget.value === "true" ? true : false
                        );
                      }}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>

              <div style={{ marginTop: "20px" }}>
                <div>Party Friendly</div>
                <ButtonGroup id="party">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={`party-${idx}`}
                      id={`party-${idx}`}
                      type="radio"
                      variant={idx === 0 ? "outline-success" : "outline-danger"}
                      name="party"
                      value={radio.value}
                      checked={partyFriendly === radio.value}
                      onChange={(e) => {
                        setPartyFriendly(
                          e.currentTarget.value === "true" ? true : false
                        );
                      }}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>

              <div style={{ marginTop: "20px" }}>
                <div>Garrage</div>
                <ButtonGroup id="garrage">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={`garrage-${idx}`}
                      id={`garrage-${idx}`}
                      type="radio"
                      variant={idx === 0 ? "outline-success" : "outline-danger"}
                      name="garrage"
                      value={radio.value}
                      checked={garrage === radio.value}
                      onChange={(e) => {
                        setGarrage(
                          e.currentTarget.value === "true" ? true : false
                        );
                      }}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>

              <FloatingLabel
                controlId="floatingInput"
                label="Nearby Schools"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={nearBySchools}
                  onChange={(e) => setNearBySchools(e.target.value)}
                  placeholder="Enter Nearby Schools"
                />
                <Form.Text className="text-muted">
                  {errors ? errors.nearBySchools : null}
                </Form.Text>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Nearby Medical"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={nearByMedical}
                  onChange={(e) => setNearByMedical(e.target.value)}
                  placeholder="Enter Nearby Medical"
                />
                <Form.Text className="text-muted">
                  {errors ? errors.nearByMedical : null}
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Nearby Commute"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={nearByCommute}
                  onChange={(e) => setNearByCommute(e.target.value)}
                  placeholder="Enter Nearby Commute"
                />
                <Form.Text className="text-muted">
                  {errors ? errors.nearByCommute : null}
                </Form.Text>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Rent of the Property"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  placeholder="Enter Rent"
                />
                <Form.Text className="text-muted">
                  {errors ? errors.rent : null}
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Brokerage of the Property"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  value={brokerage}
                  onChange={(e) => setBrokerage(e.target.value)}
                  placeholder="Enter Brokerage"
                />
                <Form.Text className="text-muted">
                  {errors ? errors.brokerage : null}
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Deposit of the Property"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                  placeholder="Enter Deposit"
                />
                <Form.Text className="text-muted">
                  {errors ? errors.deposit : null}
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Minimum Lease Period of the Property"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  value={minimumLeasePeriod}
                  onChange={(e) => setMinimumLeasePeriod(e.target.value)}
                  placeholder="Enter Minimum Lease Period"
                />
                <Form.Text className="text-muted">
                  {errors ? errors.minimumLeasePeriod : null}
                </Form.Text>
              </FloatingLabel>
              {/* 
              <div style={{ marginTop: "20px" }}>
                <div>Status</div>
                <ButtonGroup id="status">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={`status-${idx}`}
                      id={`status-${idx}`}
                      type="radio"
                      variant={idx === 0 ? "outline-success" : "outline-danger"}
                      name="status"
                      value={radio.value}
                      checked={status === radio.value}
                      onChange={(e) => {
                        setStatus(
                          e.currentTarget.value === "true" ? true : false
                        );
                      }}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div> */}

              <div>
                <div>Image One</div>
                <input
                  type="file"
                  name="ImageOne"
                  onChange={(e) => {
                    // console.log(e.target.files[0]);
                    setImageToBase64(e.target.files[0], setImageOne);
                    // console.log(imageOne);
                  }}
                />
              </div>

              <div>
                <div>Image Two</div>
                <input
                  type="file"
                  name="ImageTwo"
                  onChange={(e) => {
                    setImageToBase64(e.target.files[0], setImageTwo);
                  }}
                />
              </div>

              <div>
                <div>Image Three</div>
                <input
                  type="file"
                  name="ImageThree"
                  onChange={(e) => {
                    setImageToBase64(e.target.files[0], setImageThree);
                  }}
                />
              </div>
            </Form.Group>

            <Button variant="success" onClick={() => editPropertyDetails()}>
              Submit
            </Button>
            {requestMessage ? (
              <Alert
                key="primary"
                variant="primary"
                style={{ marginTop: "10px" }}
              >
                {requestMessage}
              </Alert>
            ) : null}
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
