import React, { useEffect, useState } from "react";
import { PropertyCard } from "./PropertyCard";
import styles from "./Home.module.css";

export const Home = () => {
  const [cardList, setCardlist] = useState([]);

  const buildCardList = () => {
    const tempList = [];
    for (let i = 0; i < 10; i++) {
      tempList.push(
        <div key={i}>
          <PropertyCard id={i} />
        </div>
      );
    }
    setCardlist(tempList);
  };

  useEffect(() => {
    buildCardList();
  }, []);

  return <div className={styles.cardContainer}>{cardList}</div>;
};
