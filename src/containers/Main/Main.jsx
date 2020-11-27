import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";

import NavBar from "../../components/NavBar";
import CardList from "../../components/CardList";

const Main = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSeachTerm] = useState("");

  const fetchBeers = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const result = await response.json();
    return result;
  };

  const handleFetch = async () => {
    const result = await fetchBeers();
    setBeers(result);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className={styles.main}>
      <nav>
        <NavBar
          searchTerm={searchTerm}
          updateSeachTerm={(e) => setSeachTerm(e.target.value.toLowerCase())}
          placeHolder="Search for a beer here"
        />
      </nav>
      <main>
        <CardList beers={beers.filter((beer) => beer.name.toLowerCase().includes(searchTerm))} />
      </main>
    </div>
  );
};

export default Main;
