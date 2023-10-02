import React from "react";

const ShopCard = ({card, key}) => {
  

  return <div className="shop-card" key={key}>
    <h2 className="model-name">{card.name}</h2>
    <p className="model-color">{card.color}</p>
    <img className="model-photo" alt={card.name} src={card.img}></img>
    <p className="model-price">$ {card.price}</p>
  </div>;
};

export default ShopCard;
