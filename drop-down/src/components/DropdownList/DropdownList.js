import React from "react";
import DropdownItem from "../DropdownItem/DropdownItem";

const DropdownList = ({ options }) => {
  const renderMenu = (options) => {
    return options.map((menu) => {
      return (
        <DropdownItem option={menu} key={menu.id} isActive={menu.isActive} />
      );
    });
  };

  return (
    <ul data-id="dropdown" className="dropdown">
      {renderMenu(options)}
    </ul>
  );
};

export default DropdownList;
