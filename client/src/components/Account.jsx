import React, { useEffect, useState } from "react";
import { property, userBroker, userUser } from "../assets/dummyData";
import { PropertyCard } from "./PropertyCard";
import { Card, Tabs, Tab, Button } from "react-bootstrap";
import styles from "./Account.module.css";
import { CreateListingModal } from "./CreateListingModal";
import axios from "axios";
import { ErrorCommon } from "./ErrorCommon";

export const Account = ({ loginToken }) => {
  // console.log(loginToken);
  const [userDetails, setUserDetails] = useState(null);
  const [isBroker, setIsBroker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.log(e.response.data.errorMessage);
        setIsLoading(false);
        setError(true);
      });
    // setUserDetails(userBroker);
  };

  useEffect(() => {
    getUser(loginToken.username);
    buildCardList();
  }, []);

  const [bookMarkedProp, setBookMarkedProp] = useState([]);
  const [ownedProp, setOwnedProp] = useState([]);
  const [rentedProp, setRentedProp] = useState([]);

  const buildCardList = () => {
    const tempList = [];
    for (let i = 0; i < 10; i++) {
      tempList.push(
        <div key={i}>
          <PropertyCard propertyDetails={property} />
        </div>
      );
    }
    setOwnedProp(tempList);
    setBookMarkedProp(tempList);
    setRentedProp(tempList);
  };

  // modal states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //

  useEffect(() => {}, []);

  if (error) {
    return <ErrorCommon></ErrorCommon>;
  }

  if (!isLoading) {
    console.log(userDetails);
    return (
      <div className={styles.mainContainer}>
        <Card className={styles.detailsCard}>
          <Card.Body>
            <Card.Title className={styles.detailsCard}>
              {userDetails.firstName} {userDetails.lastName}
            </Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>Email : {userDetails.email}</Card.Text>
            <Card.Text>
              User Type : {userDetails.userType === 1 ? "Student" : "Broker"}
            </Card.Text>
            <Card.Text>Contact : {userDetails.contact}</Card.Text>
            {isBroker ? (
              <Button variant="primary" onClick={handleShow}>
                Create Listing{" "}
              </Button>
            ) : null}
          </Card.Body>
        </Card>

        <div className={styles.tabHolder}>
          {isBroker ? (
            <div>
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab
                  eventKey="home"
                  title="Owned Properties"
                  className={styles.tab}
                >
                  <div className={styles.cardContainer}>{ownedProp}</div>
                </Tab>
              </Tabs>
            </div>
          ) : (
            <div>
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab
                  eventKey="home"
                  title="Rented Properties"
                  className={styles.tab}
                >
                  <div className={styles.cardContainer}>{rentedProp}</div>
                </Tab>
                <Tab
                  eventKey="profile"
                  title="Book Marked Properties"
                  className={styles.tab}
                >
                  <div className={styles.cardContainer}>{bookMarkedProp}</div>
                </Tab>
              </Tabs>
            </div>
          )}
        </div>
        <CreateListingModal
          show={show}
          handleClose={handleClose}
          loginToken={loginToken}
        />
      </div>
    );
  } else {
    return <div>Loading User Data</div>;
  }
};
