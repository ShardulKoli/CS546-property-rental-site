import React, { useEffect, useState } from "react";
import { userBroker, userUser } from "../assets/dummyData";
import { PropertyCard } from "./PropertyCard";
import { Card, Tabs, Tab, Button } from "react-bootstrap";
import styles from "./Account.module.css";
import { CreateListingModal } from "./CreateListingModal";

export const Account = ({ name }) => {
  const [isBroker, setIsBroker] = useState(true);

  const [userDetails, setUserDetails] = useState({});

  const getUser = () => {
    // TODO: make axios call here to set content dynamically
    setUserDetails(userBroker);
  };

  const [bookMarkedProp, setBookMarkedProp] = useState([]);
  const [ownedProp, setOwnedProp] = useState([]);
  const [rentedProp, setRentedProp] = useState([]);

  const buildCardList = () => {
    const tempList = [];
    for (let i = 0; i < 10; i++) {
      tempList.push(
        <div key={i}>
          <PropertyCard id={i} />
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

  useEffect(() => {
    buildCardList();
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Card className={styles.detailsCard}>
        <Card.Body>
          <Card.Title className={styles.detailsCard}>{name}</Card.Title>
          <Card.Title className={styles.detailsCard}>
            {userDetails.firstName} {userDetails.lastName}
          </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}
          <Card.Text>Email : {userDetails.email}</Card.Text>
          <Card.Text>User Type : {userDetails.userType}</Card.Text>
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
      <CreateListingModal show={show} handleClose={handleClose} />
    </div>
  );
};
