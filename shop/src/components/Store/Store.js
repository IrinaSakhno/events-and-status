import React from "react";
import { useState } from "react";
import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";

const Store = ({ products }) => {
  const [icon, setIcon] = useState("view_list");

  const renderCards = (icon) => {
    if (icon === "view_list") {
      return <CardsView cards={products} />;
    } else {
      return <ListView items={products} />;
    }
  };
  return (
    <div className="store">
      <IconSwitch
        icon={icon}
        onSwitch={() =>
          setIcon(icon === "view_list" ? "view_module" : "view_list")
        }
      />
      {renderCards(icon)}
    </div>
  );
};

export default Store;
