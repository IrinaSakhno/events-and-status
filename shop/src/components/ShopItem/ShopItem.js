import React from "react";
import "./ShopItem.css";

const ShopItem = ({ item }) => {
  return (
    <div className="shop-item">
      <img className="item-photo" alt={item.name} src={item.img}></img>
      <h2 className="model-name">{item.name}</h2>
      <p className="model-color">{item.color}</p>
      <p className="model-price">${item.price}</p>
      <button className="add-button">ADD TO CART</button>
    </div>
  );
};

export default ShopItem;
