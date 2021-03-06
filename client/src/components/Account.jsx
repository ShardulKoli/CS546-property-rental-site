import React, { useEffect, useState } from "react";
import { property, userBroker, userUser } from "../assets/dummyData";
import { PropertyCard } from "./PropertyCard";
import { Card, Tabs, Tab, Button, Spinner } from "react-bootstrap";
import styles from "./Account.module.css";
import { CreateListingModal } from "./CreateListingModal";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { ErrorCommon } from "./ErrorCommon";
import { CustomSpinner } from "./CustomSpinner";

export const Account = ({ loginToken }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [isBroker, setIsBroker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    getUser(loginToken.username);
  }, []);

  useEffect(() => {
    if (userDetails && userDetails.bookmarkedPropertyDetails) {
      setBookMarkedProp(
        buildPropertyCardList(userDetails.bookmarkedPropertyDetails)
      );
    } else if (userDetails && userDetails.brokerOwnedPropertyDetails) {
      setOwnedProp(
        buildPropertyCardList(userDetails.brokerOwnedPropertyDetails)
      );
    }
  }, [userDetails]);

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

  const buildPropertyCardList = (properties) => {
    const tempList = [];

    properties.forEach((property) => {
      tempList.push(
        <div key={property._id} id={`div_${property._id}`}>
          <PropertyCard propertyDetails={property} />
        </div>
      );
    });

    return tempList;
  };

  // modal states
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  //

  useEffect(() => {}, []);

  if (error) {
    return <ErrorCommon message={error}></ErrorCommon>;
  }

  if (!isLoading) {
    return (
      <div className={styles.mainContainer}>
        <Card className={styles.detailsCard}>
          <Card.Body>
            {/* <Card.Title className={styles.detailsCard}>
              
            </Card.Title> */}
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Name : {userDetails.firstName} {userDetails.lastName}
            </Card.Text>
            <Card.Text>Email : {userDetails.email}</Card.Text>
            <Card.Text>
              User Type : {userDetails.userType === 1 ? "Student" : "Broker"}
            </Card.Text>
            <Card.Text>Contact : {userDetails.contact}</Card.Text>
            {isBroker ? (
              <Button variant="primary" onClick={handleShow}>
                <AddIcon style={{ marginRight: "5px" }}></AddIcon>
                Create Listing
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
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
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
          loginToken={loginToken}
          setShow={setShow}
          getUser={getUser}
        />
      </div>
    );
  } else {
    return <CustomSpinner />;
  }
};
