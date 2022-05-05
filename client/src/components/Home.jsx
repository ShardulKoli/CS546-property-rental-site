import React, { useEffect, useState } from "react";
import { PropertyCard } from "./PropertyCard";
import styles from "./Home.module.css";
import axios from "axios";
import { ErrorCommon } from "./ErrorCommon";
import { Filters } from "./Filters";

export const Home = ({ loginToken }) => {
  const [cardList, setCardlist] = useState([]);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  const getAllProperties = () => {
    axios
      .get("/property/getAllProperties")
      .then((res) => {
        // console.log("Properties");
        console.log(res.data);
        setProperties(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.errorMessage);
        setError(e.response.data.errorMessage);
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

  return (
    <div>
      <Filters
        getAllProperties={getAllProperties}
        properties={properties}
        setProperties={setProperties}
      />
      <div className={styles.cardContainer}>{cardList}</div>
    </div>
  );
};
