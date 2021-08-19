import React from "react";
import styles from "./CardListContainer.module.css";

const CardListContainer = ({ children }) => {
  return <div className={styles.cardListContainer}>{children}</div>;
};

export default CardListContainer;
