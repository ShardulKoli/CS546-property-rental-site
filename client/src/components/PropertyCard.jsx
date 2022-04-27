import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { property } from "../assets/dummyData";
import styles from "./PropertyCard.module.css";

export const PropertyCard = ({ id }) => {
  const [index, setIndex] = useState(0);
  const [propertyDetails, setPropertyDetails] = useState({});
  const navigate = useHistory();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const loadProperyPage = (id) => {
    navigate.push(`/property/${id}`);
  };

  const getPropertyDetails = (id) => {
    // TODO: Fetch the property details based on the id of the property

    setPropertyDetails(property);
  };

  useEffect(() => {
    getPropertyDetails(id);
  }, []);

  // const property = {
  //   _id: 1,
  //   name: "Property 1",
  //   address: "Some Address in Heights",
  //   pincode: "07307",
  //   city: "Jersey City",
  //   state: "New Jersey",
  //   type: "Apartment",
  //   beds: 3,
  //   baths: 2,
  //   balcony: 1,
  //   centralAir: false,
  //   petFriendly: true,
  //   partyFriendly: true,
  //   garrage: false,
  //   nearBySchools: "Stevens",
  //   nearByMedical: "Pharmacy",
  //   nearByCommute: "Commute list",
  //   rent: 2000,
  //   brokerage: 500,
  //   deposit: 500,
  //   minimumLeasePeriod: 12,
  //   images: [],
  //   broker: 1,
  //   status: true,
  //   isActive: true,
  // };

  return (
    <div>
      <Card className={styles.cardStyle}>
        <Carousel
          interval={null}
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
        >
          <Carousel.Item
            onClick={() => loadProperyPage(id)}
            // className={styles.cardStyle}
          >
            <img
              className="d-block w-100"
              src={require("../assets/logo192.png")}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              <p>Image one</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item onClick={() => loadProperyPage(id)}>
            <img
              className="d-block w-100"
              src={require("../assets/logo192.png")}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              <p>Image two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item onClick={() => loadProperyPage(id)}>
            <img
              className="d-block w-100"
              src={require("../assets/logo192.png")}
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              <p>Image Three</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card.Body
          onClick={() => loadProperyPage(id)}
          // className={styles.cardBody}
        >
          <Card.Title>
            {propertyDetails.name} {id}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {propertyDetails.address}
          </Card.Subtitle>
          <div className={styles.detailsStyle}>
            <div>Beds: {propertyDetails.beds}</div>
            <div>Baths: {propertyDetails.baths}</div>
          </div>
          <div>Type: {propertyDetails.type}</div>

          <Card style={{ marginTop: "5px" }}>
            <div className={styles.rentLabel}>
              ${propertyDetails.rent}/month
            </div>
          </Card>

          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
