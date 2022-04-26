import React, { useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "./PropertyCard.module.css";

export const PropertyCard = ({ id }) => {
  const [index, setIndex] = useState(0);
  const navigate = useHistory();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const loadProperyPage = (id) => {
    navigate.push(`/property/${id}`);
  };

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
          <Card.Title>Property Name {id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
