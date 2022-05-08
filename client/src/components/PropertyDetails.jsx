import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { property } from "../assets/dummyData";
import { Carousel, Card, Button, Spinner } from "react-bootstrap";
import styles from "./PropertyDetails.module.css";
import { ErrorCommon } from "./ErrorCommon";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import axios from "axios";
import { EditListingModal } from "./EditListingModal";
import { CustomSpinner } from "./CustomSpinner";

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
    axios
      .get(`/property/getProperty/${id}`)
      .then((res) => {
        setPropertyDetails(res.data);
        getUser(loginToken.username);
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
      });
  };

  const getUser = (username) => {
    axios
      .get(`/user/${username}`)
      .then((res) => {
        setUserDetails(res.data.user);
        setIsBroker(res.data.user.userType === 2 ? true : false);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
      });
  };

  const bookmarkProperty = () => {
    const bookmarkDetails = {
      username: userDetails.email,
      propertyId: id,
    };

    axios
      .post(`/property/bookmark`, bookmarkDetails)
      .then((res) => {
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
        setInterestShown(true);
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
      });
  };

  const navigate = useHistory();

  const loadHomepage = () => {
    navigate.push(`/`);
  };

  const deleteListing = (propertyName) => {
    axios
      .put(`/property/removeProperty`, { name: propertyName })
      .then((res) => {
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
        getPropertyDetails(id);
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getPropertyDetails(id);
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
            <div className={styles.imageHolder}>
              <div>
                {propertyDetails.images && propertyDetails.images[0] ? (
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
                    src={require("../assets/no_image.jpeg")}
                  />
                )}
              </div>
              <div>
                {propertyDetails.images && propertyDetails.images[1] ? (
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
                    src={require("../assets/no_image.jpeg")}
                  />
                )}
              </div>
              <div>
                {propertyDetails.images && propertyDetails.images[2] ? (
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
                    src={require("../assets/no_image.jpeg")}
                  />
                )}
              </div>
            </div>

            <div className={styles.buttonHolder}>
              {isBroker ? null : (
                <div>
                  {userDetails.bookmarkedProp.includes(id) ? (
                    <Button
                      onClick={() => bookmarkProperty()}
                      variant="warning"
                      className={styles.button}
                    >
                      <BookmarkIcon className={styles.icon}></BookmarkIcon>
                      Remove Bookmark
                    </Button>
                  ) : (
                    <Button
                      onClick={() => bookmarkProperty()}
                      variant="warning"
                      className={styles.button}
                    >
                      <BookmarkBorderIcon
                        className={styles.icon}
                      ></BookmarkBorderIcon>
                      Bookmark this property
                    </Button>
                  )}
                </div>
              )}

              {isBroker || propertyDetails.status ? null : (
                <div>
                  {interestShown ? (
                    <div className={styles.button}>
                      <Button disabled={true} className={styles.button}>
                        <EmailIcon className={styles.icon}></EmailIcon>
                        Broker has recieved your mail
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => {
                        showInterest();
                      }}
                      className={styles.button}
                    >
                      <EmailIcon className={styles.icon}></EmailIcon>
                      Show interest by sending a mail!
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
                        <DeleteIcon className={styles.icon}></DeleteIcon>
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
                        variant={propertyDetails.status ? "success" : "warning"}
                        className={styles.button}
                      >
                        {propertyDetails.status ? (
                          <div>
                            <DoneIcon className={styles.icon}></DoneIcon>
                            Mark as Available
                          </div>
                        ) : (
                          <div>
                            <DoNotDisturbIcon
                              className={styles.icon}
                            ></DoNotDisturbIcon>
                            Mark as rented out
                          </div>
                        )}
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
                        <EditIcon className={styles.icon}></EditIcon>
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
            <Card
              className={styles.detailsCard}
              style={{ background: "whitesmoke" }}
            >
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
                  <div>
                    {propertyDetails.pincode ? propertyDetails.pincode : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.city ? propertyDetails.city : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.state ? propertyDetails.state : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.type ? propertyDetails.type : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.beds ? propertyDetails.beds : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.bath ? propertyDetails.bath : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.balcony ? propertyDetails.balcony : "N/A"}
                  </div>
                  <div>{propertyDetails.centralAir ? "Yes" : "No"}</div>
                  <div>{propertyDetails.petFriendly ? "Yes" : "No"}</div>
                  <div>{propertyDetails.partyFriendly ? "Yes" : "No"}</div>
                  <div>{propertyDetails.garrage ? "Yes" : "No"}</div>
                  <div>
                    {propertyDetails.nearBySchools
                      ? propertyDetails.nearBySchools
                      : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.nearByMedical
                      ? propertyDetails.nearByMedical
                      : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.nearByCommute
                      ? propertyDetails.nearByCommute
                      : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.brokerage
                      ? propertyDetails.brokerage
                      : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.deposit ? propertyDetails.deposit : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.minimumLeasePeriod
                      ? propertyDetails.minimumLeasePeriod
                      : "N/A"}
                  </div>
                  <div>
                    {propertyDetails.broker ? propertyDetails.broker : "N/A"}
                  </div>
                </div>
              </div>
            </Card>
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
    return <CustomSpinner />;
  }
};
