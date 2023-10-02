import React from "react";
import ShopItem from "../ShopItem/ShopItem";

const ListView = ({ items }) => {
  const renderList = (items) => {
    return items.map((item, index) => {
      return <ShopItem item={item} key={index} />;
    });
  };
  
  return <div className="list-view">{renderList(items)}</div>;
};

export default ListView;
