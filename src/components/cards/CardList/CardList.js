import React from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.css";
import CardListContainer from "../CardListContainer/CardListContainer";

const CardList = ({ cards }) => {
  return (
    <CardListContainer>
      <div className={styles.cardListContainer}>
        {cards.map((card) => (
          <Card data={card} key={`card-${card.id}`} />
        ))}
      </div>
    </CardListContainer>
  );
};

export default CardList;
