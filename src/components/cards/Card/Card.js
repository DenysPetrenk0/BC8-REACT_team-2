import React from "react";
import CardBody from "../CardBody/CardBody";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  const { title, reward, imageUrl } = data;
  return (
    <div className={styles.cardContainer}>
      <CardBody imageUrl={imageUrl} title={title} />
      <div className={styles.cardFooter}></div>
    </div>
  );
};

export default Card;
