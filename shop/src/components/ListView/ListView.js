import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import "./ListView.css";

const ListView = ({ items }) => {
  const renderList = (items) => {
    return items.map((item, index) => {
      return (
        <div key={index} className="card">
          <ShopItem item={item} key={item.id} />
        </div>
      );
    });
  };

  return <div className="list-view">{renderList(items)}</div>;
};

export default ListView;
