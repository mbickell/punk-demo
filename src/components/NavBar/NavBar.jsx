import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = ({ searchTerm, updateSeachTerm, placeHolder }) => {
  return (
    <div className={styles.nav}>
      <label>{placeHolder}:</label>
      <input type="text" value={searchTerm} onChange={updateSeachTerm} placeholder={placeHolder} />
    </div>
  );
};

export default NavBar;
