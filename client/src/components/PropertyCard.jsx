import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "./PropertyCard.module.css";

export const PropertyCard = ({ propertyDetails, loginToken }) => {
  const [index, setIndex] = useState(0);
  // const [propertyDetails, setPropertyDetails] = useState(propertyData);
  const navigate = useHistory();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const loadProperyPage = (id) => {
    navigate.push(`/property/${propertyDetails._id}`);
  };

  if (!propertyDetails) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Card className={styles.cardStyle}>
        <Carousel
          interval={null}
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
        >
          <Carousel.Item>
            {propertyDetails.images && propertyDetails.images[0] ? (
              // console.log(propertyDetails.images)
              <img
                alt="not fount"
                width={500}
                height={400}
                src={propertyDetails.images[0]}
              />
            ) : (
              // <img
              //   alt="First slide"
              //   width={"500"}
              //   height={400}
              //   src={URL.createObjectURL(propertyDetails.images[0])}
              // />

              <img
                className="d-block w-100"
                width={500}
                height={400}
                src={require("../assets/logo192.png")}
              />
            )}

            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              <p>Image one</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {propertyDetails.images && propertyDetails.images[1] ? (
              // console.log(propertyDetails.images)
              <img
                alt="not fount"
                width={500}
                height={400}
                src={propertyDetails.images[1]}
              />
            ) : (
              <img
                className="d-block w-100"
                width={500}
                height={400}
                src={require("../assets/logo192.png")}
              />
            )}

            {/* <img
                  // className="d-block w-100"
                  width={500}
                  height={400}
                  src={require("../assets/logo192.png")}
                  alt="Second slide"
                /> */}

            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              <p>Image two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {propertyDetails.images && propertyDetails.images[2] ? (
              // console.log(propertyDetails.images)
              <img
                alt="not fount"
                width={500}
                height={400}
                src={propertyDetails.images[2]}
              />
            ) : (
              <img
                className="d-block w-100"
                width={500}
                height={400}
                src={require("../assets/logo192.png")}
              />
            )}

            {/* <img
                  // className="d-block w-100"
                  width={500}
                  height={400}
                  src={require("../assets/logo192.png")}
                  alt="Third slide"
                /> */}

            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              <p>Image Three</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card.Body
          onClick={() => loadProperyPage(propertyDetails._id)}
          // className={styles.cardBody}
        >
          <Card.Title>{propertyDetails.name}</Card.Title>
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

          {propertyDetails.status ? (
            <Card style={{ marginTop: "5px" }}>
              <div className={styles.rentedOutLabel}>
                This property is rented out
              </div>
            </Card>
          ) : null}

          {}

          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
