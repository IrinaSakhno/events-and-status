import React from "react";
import "./ShopCard.css";

const ShopCard = ({ card }) => {
  return (
    <div className="shop-card">
      <h2 className="model-name">{card.name}</h2>
      <p className="model-color">{card.color}</p>
      <img className="model-photo" alt={card.name} src={card.img}></img>
      <div className="buy-options">
        <p className="model-price">${card.price}</p>
        <button className="add-button">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ShopCard;
