import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { property } from "../assets/dummyData";
import { Carousel, Card, Button } from "react-bootstrap";
import styles from "./PropertyDetails.module.css";
import { ErrorCommon } from "./ErrorCommon";
import axios from "axios";

export const PropertyDetails = ({ loginToken }) => {
  const [propertyDetails, setPropertyDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isBroker, setIsBroker] = useState(null);
  // const isBroker = loginToken.userType === 2 ? true : false;

  const { id } = useParams();

  const getPropertyDetails = () => {
    // TODO: Fetch the property details based on the id of the property

    axios
      .get(`/property/getProperty/${id}`)
      .then((res) => {
        setPropertyDetails(res.data);
        setError(null);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.response);
      });

    setPropertyDetails(property);
  };

  const getUser = (username) => {
    // TODO: make axios call here to set content dynamically
    // console.log(username);
    axios
      .get(`/user/${username}`)
      .then((res) => {
        console.log(res.data.user);
        setUserDetails(res.data.user);
        setIsBroker(res.data.user.userType === 2 ? true : false);
        setIsLoading(false);
      })
      .catch((e) => {
        // console.log(e.response.data.errorMessage);
        setIsLoading(false);
        setError(true);
      });
    // setUserDetails(userBroker);
  };

  const bookmarkProperty = () => {
    const bookmarkDetails = {
      username: userDetails.email,
      propertyId: id,
    };

    console.log(bookmarkDetails);

    // axios
    //   .get(`/user/${username}`)
    //   .then((res) => {
    //     console.log(res.data.user);
    //     setUserDetails(res.data.user);
    //     setIsBroker(res.data.user.userType === 2 ? true : false);
    //     setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     // console.log(e.response.data.errorMessage);
    //     setIsLoading(false);
    //     setError(true);
    //   });
  };

  useEffect(() => {
    getPropertyDetails(id);
    getUser(loginToken.username);
  }, []);

  // Carousel index
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [index, setIndex] = useState(0);

  if (error) {
    return <ErrorCommon></ErrorCommon>;
  }

  if (!isLoading) {
    return (
      <div>
        <div>
          <Card className={styles.cardStyle}>
            <Carousel
              interval={null}
              activeIndex={index}
              onSelect={handleSelect}
              // variant="dark"
              className={styles.carousel}
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
            <div className={styles.detailsHolder}>
              <div className={styles.detailsColumn}>
                <div>Name:</div>
                <div>Address:</div>
              </div>
              <div>
                <div>{propertyDetails.name}</div>
                <div>{propertyDetails.address}</div>
              </div>
            </div>

            {isBroker ? null : (
              <Button onClick={() => bookmarkProperty()}>BookMark</Button>
            )}
          </Card>
        </div>
      </div>
    );
  } else {
    return <div>Loading User Data</div>;
  }
};
