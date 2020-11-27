import React from "react";
import styles from "./CardList.module.scss";

import Card from "../Card";

const CardList = ({ beers }) => {
  return (
    <section className={styles.cards}>
      {beers.map((beer) => (
        <Card beer={beer} />
      ))}
    </section>
  );
};

export default CardList;
