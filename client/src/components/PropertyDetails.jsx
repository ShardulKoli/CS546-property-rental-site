import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { property } from "../assets/dummyData";
import { Carousel, Card } from "react-bootstrap";
import styles from "./PropertyDetails.module.css";

export const PropertyDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState({});
  const { id } = useParams();

  const getPropertyDetails = () => {
    // TODO: Fetch the property details based on the id of the property

    setPropertyDetails(property);
  };

  useEffect(() => {
    getPropertyDetails(id);
  }, []);

  // Carousel index
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div>
        <Card className={styles.cardStyle}>
          <Carousel
            interval={null}
            activeIndex={index}
            onSelect={handleSelect}
            variant="dark"
            className={styles.carousel}
          >
            <Carousel.Item>
              <img
                // className="d-block w-100"
                width={500}
                height={400}
                src={require("../assets/logo192.png")}
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
                <p>Image one</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                // className="d-block w-100"
                width={500}
                height={400}
                src={require("../assets/logo192.png")}
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                <p>Image two</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                // className="d-block w-100"
                width={500}
                height={400}
                src={require("../assets/logo192.png")}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                <p>Image Three</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div>qweqe</div>
        </Card>
      </div>
    </div>
  );
};
