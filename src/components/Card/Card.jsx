import React from "react";
import styles from "./Card.module.scss";

const Card = ({ beer }) => {
  return (
    <article className={styles.card}>
      <p className={styles.heading}>{beer.name}</p>
      <img src={beer.image_url} alt={beer.name} />
      <p className={styles.abv}>{beer.abv} ABV</p>
      <p>{beer.description}</p>
      <section className={styles.ingredients}>
        <div>
          <p>Malt</p>
          <ul>
            {beer.ingredients.malt.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
        <div>
        <p>Hops</p>
          <ul>
            {beer.ingredients.hops.map(item => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Card;
