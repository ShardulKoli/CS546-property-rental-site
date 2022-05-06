import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { property } from "../assets/dummyData";
import { Carousel, Card, Button } from "react-bootstrap";
import styles from "./PropertyDetails.module.css";
import { ErrorCommon } from "./ErrorCommon";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { EditListingModal } from "./EditListingModal";

export const PropertyDetails = ({ loginToken }) => {
  const [propertyDetails, setPropertyDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isBroker, setIsBroker] = useState(null);
  const [interestShown, setInterestShown] = useState(false);

  // modal states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //

  const { id } = useParams();

  const getPropertyDetails = () => {
    // TODO: Fetch the property details based on the id of the property

    axios
      .get(`/property/getProperty/${id}`)
      .then((res) => {
        console.log(res.data);
        setPropertyDetails(res.data);
        // Loading and error will be set to false when the user is set
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
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
        setError(e.response.data.errorMessage);
        setIsLoading(false);
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
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
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
      })
      .catch((e) => {
        console.log(e.response.data.errorMessage);
        setError(e.response.data.errorMessage);
        setIsLoading(false);
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
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
      });
  };

  const markedAsRentedOut = () => {
    const markedAsRentedDetails = {
      username: userDetails.email,
      propertyId: id,
    };

    axios
      .post(`/property/markPropertyAsRentedOut`, markedAsRentedDetails)
      .then((res) => {
        console.log(res.data);
        getPropertyDetails(id);
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
      });
  };

  const editProperty = () => {
    const markedAsRentedDetails = {
      username: userDetails.email,
      propertyId: id,
    };

    axios
      .post(`/property/markPropertyAsRentedOut`, markedAsRentedDetails)
      .then((res) => {
        console.log(res.data);
        getPropertyDetails(id);
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
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
    return <ErrorCommon message={error}></ErrorCommon>;
  }

  if (!isLoading) {
    return (
      <div>
        <div>
          <Card className={styles.cardStyle}>
            {/* <Carousel
              // interval={null}
              activeIndex={index}
              onSelect={handleSelect}
              variant="dark"
              className={styles.carousel}
            ></Carousel> */}

            <div className={styles.buttonHolder}>
              <div>
                {propertyDetails.images && propertyDetails.images[0] ? (
                  // console.log(propertyDetails.images)
                  <img
                    alt="not fount"
                    width={400}
                    height={400}
                    src={propertyDetails.images[0]}
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    width={400}
                    height={400}
                    alt="not found"
                    src={require("../assets/logo192.png")}
                  />
                )}
              </div>
              <div>
                {propertyDetails.images && propertyDetails.images[1] ? (
                  // console.log(propertyDetails.images)
                  <img
                    alt="not fount"
                    width={400}
                    height={400}
                    src={propertyDetails.images[1]}
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    width={400}
                    height={400}
                    alt="not found"
                    src={require("../assets/logo192.png")}
                  />
                )}
              </div>
              <div>
                {propertyDetails.images && propertyDetails.images[2] ? (
                  // console.log(propertyDetails.images)
                  <img
                    alt="not fount"
                    width={400}
                    height={400}
                    src={propertyDetails.images[2]}
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    width={400}
                    height={400}
                    alt="not found"
                    src={require("../assets/logo192.png")}
                  />
                )}
              </div>
            </div>

            <div className={styles.buttonHolder}>
              {/* {isBroker ? null : (
              <Button onClick={() => bookmarkProperty()}>BookMark</Button>
            )} */}
              {isBroker ? null : (
                <div>
                  {userDetails.bookmarkedProp.includes(id) ? (
                    <Button
                      onClick={() => bookmarkProperty()}
                      variant="warning"
                      className={styles.button}
                    >
                      <BookmarkIcon></BookmarkIcon>
                      Remove Bookmark
                    </Button>
                  ) : (
                    <Button
                      onClick={() => bookmarkProperty()}
                      variant="warning"
                      className={styles.button}
                    >
                      <BookmarkBorderIcon></BookmarkBorderIcon>
                      Bookmark this property
                    </Button>
                  )}
                </div>
              )}

              {isBroker || propertyDetails.status ? null : (
                <div>
                  {interestShown ? (
                    <div className={styles.button}>
                      An email has been sent to the broker
                    </div>
                  ) : (
                    <Button
                      onClick={() => {
                        showInterest();
                      }}
                      className={styles.button}
                    >
                      Show interest by sendind a mail!
                    </Button>
                  )}
                </div>
              )}

              {isBroker ? (
                <div>
                  {userDetails.ownedProp.includes(id) ? (
                    <div>
                      <Button
                        onClick={() => {
                          deleteListing(propertyDetails.name);
                        }}
                        variant="danger"
                        className={styles.button}
                      >
                        <DeleteIcon></DeleteIcon>
                        Delete This Listing
                      </Button>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {isBroker ? (
                <div>
                  {userDetails.ownedProp.includes(id) ? (
                    <div>
                      {/* <div>Mark the property as Rented out/Available</div> */}
                      <Button
                        onClick={() => {
                          markedAsRentedOut();
                        }}
                        variant={propertyDetails.status ? "success" : "danger"}
                        className={styles.button}
                      >
                        {propertyDetails.status
                          ? "Mark as Available"
                          : "Mark as rented out"}
                      </Button>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {isBroker ? (
                <div>
                  {userDetails.ownedProp.includes(id) ? (
                    <div>
                      <Button onClick={handleShow} className={styles.button}>
                        Edit This Listing
                      </Button>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {/* {userDetails.bookmarkedProp.includes(id) ? (
              <div>isBookmarked</div>
            ) : null} */}
            </div>

            <div className={styles.detailsHolder}>
              <div className={styles.detailsColumn}>
                <div>Name:</div>
                <div>Address:</div>
                <div>Status:</div>
                <div>Pincode:</div>
                <div>City:</div>
                <div>State:</div>
                <div>Type:</div>
                <div>Beds:</div>
                <div>Baths:</div>
                <div>Balcony:</div>
                <div>Central Air:</div>
                <div>Pet Friendly:</div>
                <div>Party Friendly:</div>
                <div>Garrage:</div>
                <div>Nearby Schools:</div>
                <div>Nearby Medical:</div>
                <div>Nearby Commute:</div>
                <div>Brokerage:</div>
                <div>Deposit:</div>
                <div>Minimum Lease Period:</div>
                <div>Broker:</div>
              </div>
              <div>
                <div>{propertyDetails.name}</div>
                <div>{propertyDetails.address}</div>
                {propertyDetails.status ? (
                  <div>This Property is rented out</div>
                ) : (
                  <div>Available</div>
                )}
                <div>{propertyDetails.pincode}</div>
                <div>{propertyDetails.city}</div>
                <div>{propertyDetails.state}</div>
                <div>{propertyDetails.type}</div>
                <div>{propertyDetails.beds}</div>
                <div>{propertyDetails.bath}</div>
                <div>{propertyDetails.balcony}</div>
                <div>{propertyDetails.centralAir ? "true" : "false"}</div>
                <div>{propertyDetails.petFriendl ? "true" : "false"}</div>
                <div>{propertyDetails.partyFriendly ? "true" : "false"}</div>
                <div>{propertyDetails.garrage ? "true" : "false"}</div>
                <div>{propertyDetails.nearBySchools}</div>
                <div>{propertyDetails.nearByMedical}</div>
                <div>{propertyDetails.nearByCommute}</div>
                <div>{propertyDetails.brokerage}</div>
                <div>{propertyDetails.deposit}</div>
                <div>{propertyDetails.minimumLeasePeriod}</div>
                <div>{propertyDetails.broker}</div>
              </div>
            </div>
          </Card>
        </div>
        <EditListingModal
          show={show}
          handleClose={handleClose}
          loginToken={loginToken}
          getPropertyDetails={getPropertyDetails}
          propertyDetails={propertyDetails}
          id={id}
        />
      </div>
    );
  } else {
    return <div>Loading User Data</div>;
  }
};
