import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "./PropertyCard.module.css";

export const PropertyCard = ({ propertyDetails, loginToken }) => {
  const [index, setIndex] = useState(0);
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
          <Carousel.Item onClick={() => loadProperyPage(propertyDetails._id)}>
            {propertyDetails.images && propertyDetails.images[0] ? (
              <img
                alt="not fount"
                width={500}
                height={400}
                src={propertyDetails.images[0]}
              />
            ) : (
              <img
                className="d-block w-100"
                width={500}
                height={400}
                alt="not found"
                src={require("../assets/no_image.jpeg")}
              />
            )}

            <Carousel.Caption>
              <p>Image one</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item onClick={() => loadProperyPage(propertyDetails._id)}>
            {propertyDetails.images && propertyDetails.images[1] ? (
              <img
                alt="not found"
                width={500}
                height={400}
                src={propertyDetails.images[1]}
              />
            ) : (
              <img
                className="d-block w-100"
                width={500}
                height={400}
                alt="not found"
                src={require("../assets/no_image.jpeg")}
              />
            )}

            <Carousel.Caption>
              <p>Image two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item onClick={() => loadProperyPage(propertyDetails._id)}>
            {propertyDetails.images && propertyDetails.images[2] ? (
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
                alt="not found"
                src={require("../assets/no_image.jpeg")}
              />
            )}

            <Carousel.Caption>
              <p>Image Three</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card.Body onClick={() => loadProperyPage(propertyDetails._id)}>
          <Card.Title>{propertyDetails.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {propertyDetails.address}
          </Card.Subtitle>
          <div className={styles.detailsStyle}>
            <div>Beds: {propertyDetails.beds}</div>
            <div>Baths: {propertyDetails.bath}</div>
          </div>
          <div>Type: {propertyDetails.type}</div>

          <Card style={{ marginTop: "5px" }}>
            <div className={styles.rentLabel}>
              ${propertyDetails.rent}/month
            </div>
          </Card>

          {propertyDetails.status ? (
            <Card style={{ marginTop: "5px" }}>
              <div className={styles.rentedOutLabel}>Rented out</div>
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
