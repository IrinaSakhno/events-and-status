import React from "react";
import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";


const Store = ({ products }) => {
  
  return (<div className="store">
    <IconSwitch icon={"view_list"} onSwitch={() => console.log("change state here")}/>
    <CardsView cards={products} />
    <ListView items={products} />
  </div>);
};

export default Store;
