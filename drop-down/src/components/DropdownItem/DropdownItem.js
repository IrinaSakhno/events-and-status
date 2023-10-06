import classNames from "classnames";
import React from "react";

const DropdownItem = ({ option, isActive }) => {
  return (
    <li className={classNames(isActive && "active", "menu-item")}>
      <a href="_blank">{option.option}</a>
    </li>
  );
};

export default DropdownItem;
