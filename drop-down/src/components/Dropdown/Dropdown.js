import React from "react";
import { useState } from "react";
import classNames from "classnames";

import DropdownList from "../DropdownList/DropdownList";

const Dropdown = ({ options }) => {
  const [dropdownListIsOpen, setDropdownListOpen] = useState(false);

  return (
    <div className="container">
      <div
        data-id="wrapper"
        className={classNames("dropdown-wrapper", dropdownListIsOpen && "open")}
      >
        <button
          data-id="toggle"
          className="btn"
          onClick={() => setDropdownListOpen(!dropdownListIsOpen)}
        >
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList options={options} />
      </div>
    </div>
  );
};

export default Dropdown;
