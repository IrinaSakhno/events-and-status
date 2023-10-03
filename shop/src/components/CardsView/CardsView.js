import React from "react";
import ShopCard from "../ShopCard/ShopCard";
import "./CardsView.css";

const CardsView = ({ cards }) => {
  const renderCards = (cards) => {
    return cards.map((card, index) => {
      return (
        <div key={index} className="card">
          <ShopCard card={card} key={card.id} />
        </div>
      );
    });
  };
  return <div className="cards-view">{renderCards(cards)}</div>;
};

export default CardsView;
