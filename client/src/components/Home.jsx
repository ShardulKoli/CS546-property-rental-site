import React, { useEffect, useState } from "react";
import { PropertyCard } from "./PropertyCard";
import styles from "./Home.module.css";
import axios from "axios";

export const Home = ({ loginToken }) => {
  const [cardList, setCardlist] = useState([]);
  const [properties, setProperties] = useState([]);

  const getAllProperties = () => {
    axios
      .get("/property/getAllProperties")
      .then((res) => {
        console.log("Properties");
        console.log(res.data);
        setProperties(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.errorMessage);
      });
  };

  const buildCardList = () => {
    const tempList = [];
    properties.forEach((property) => {
      tempList.push(
        <div key={property._id}>
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

  return <div className={styles.cardContainer}>{cardList}</div>;
};
