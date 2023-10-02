import React from "react";
import ShopCard from "../ShopCard/ShopCard";

const CardsView = ({ cards }) => {
  
const renderCards = (cards) => {
    return cards.map((card, index) => {
       return <ShopCard card={card} key={index}/>
    }) 
}
  return (<div className="cards-view">
    {renderCards(cards)}
  </div>);
};

export default CardsView;
