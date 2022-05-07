import React, { useEffect, useState } from "react";
import { PropertyCard } from "./PropertyCard";
import styles from "./Home.module.css";
import axios from "axios";
import { ErrorCommon } from "./ErrorCommon";
import { Filters } from "./Filters";
import { Spinner } from "react-bootstrap";
import { CustomSpinner } from "./CustomSpinner";

export const Home = ({ loginToken }) => {
  const [cardList, setCardlist] = useState([]);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllProperties = () => {
    axios
      .get("/property/getAllProperties")
      .then((res) => {
        setProperties(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.errorMessage);
        setIsLoading(false);
      });
  };

  const buildCardList = () => {
    const tempList = [];
    properties.forEach((property) => {
      tempList.push(
        <div key={property._id} id={`div_${property._id}`}>
          <PropertyCard propertyDetails={property} loginToken={loginToken} />
        </div>
      );
    });
    setCardlist(tempList);
  };

  useEffect(() => {
    getAllProperties();
  }, []);

  useEffect(() => {
    buildCardList();
  }, [properties]);

  if (error) {
    return <ErrorCommon message={error}></ErrorCommon>;
  }

  if (isLoading) {
    return <CustomSpinner />;
  } else {
    return (
      <div>
        <Filters
          getAllProperties={getAllProperties}
          properties={properties}
          setProperties={setProperties}
          setIsLoading={setIsLoading}
        />

        <div className={styles.cardContainer}>
          {cardList.length < 1 ? (
            <div style={{ fontSize: "100px" }}>No Properties Found</div>
          ) : (
            cardList
          )}
        </div>
      </div>
    );
  }
};
