import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { property } from "../assets/dummyData";
import { Carousel, Card, Button } from "react-bootstrap";
import styles from "./PropertyDetails.module.css";
import { ErrorCommon } from "./ErrorCommon";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import axios from "axios";

export const PropertyDetails = ({ loginToken }) => {
  const [propertyDetails, setPropertyDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isBroker, setIsBroker] = useState(null);
  const [interestShown, setInterestShown] = useState(false);
  // const isBroker = loginToken.userType === 2 ? true : false;

  const { id } = useParams();

  const getPropertyDetails = () => {
    // TODO: Fetch the property details based on the id of the property

    axios
      .get(`/property/getProperty/${id}`)
      .then((res) => {
        setPropertyDetails(res.data);
        setError(null);
        // setIsLoading(false);
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

    axios
      .post(`/property/bookmark`, bookmarkDetails)
      .then((res) => {
        console.log(res.data);
        getUser(userDetails.email);
        // setUserDetails(res.data.user);
        // setIsBroker(res.data.user.userType === 2 ? true : false);
        // setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        // setIsLoading(false);
        // setError(true);
      });
  };

  const showInterest = () => {
    const showInterestDetails = {
      username: userDetails.email,
      propertyId: id,
      broker: propertyDetails.broker,
    };

    axios
      .post(`/property/showInterestInProperty`, showInterestDetails)
      .then((res) => {
        console.log(res.data);
        setInterestShown(true);
        // setUserDetails(res.data.user);
        // setIsBroker(res.data.user.userType === 2 ? true : false);
        // setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.response.data.errorMessage);
        // setIsLoading(false);
        // setError(true);
      });
  };

  const navigate = useHistory();

  const loadHomepage = () => {
    navigate.push(`/`);
  };

  const deleteListing = (propertyName) => {
    console.log("Deleting listing");
    console.log(propertyName);

    axios
      .put(`/property/removeProperty`, { name: propertyName })
      .then((res) => {
        console.log(res.data);
        loadHomepage();
        // setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        // setIsLoading(false);
        // setError(true);
      });
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

            {/* {isBroker ? null : (
              <Button onClick={() => bookmarkProperty()}>BookMark</Button>
            )} */}

            {isBroker ? null : (
              <div>
                <div>Click to toggle bookmark</div>
                {userDetails.bookmarkedProp.includes(id) ? (
                  <BookmarkIcon
                    style={{ fontSize: "40px" }}
                    onClick={() => bookmarkProperty()}
                  ></BookmarkIcon>
                ) : (
                  <BookmarkBorderIcon
                    style={{ fontSize: "40px" }}
                    onClick={() => bookmarkProperty()}
                  ></BookmarkBorderIcon>
                )}
              </div>
            )}

            {isBroker ? null : (
              <div>
                {interestShown ? (
                  <div>An email has been sent to the broker</div>
                ) : (
                  <Button
                    onClick={() => {
                      showInterest();
                    }}
                  >
                    Show interest by sendind a mail!
                  </Button>
                )}
              </div>
            )}

            {isBroker ? (
              <div>
                <div>Click to delete property listing</div>
                {userDetails.ownedProp.includes(id) ? (
                  <Button
                    onClick={() => {
                      deleteListing(propertyDetails.name);
                    }}
                  >
                    Delete This Listing
                  </Button>
                ) : null}
              </div>
            ) : null}

            {/* {userDetails.bookmarkedProp.includes(id) ? (
              <div>isBookmarked</div>
            ) : null} */}
          </Card>
        </div>
      </div>
    );
  } else {
    return <div>Loading User Data</div>;
  }
};
