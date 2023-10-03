import React from "react";
import "./IconSwitch.css";

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch">
      <button className="switch-button" alt={icon} onClick={onSwitch}>
        <i className="material-icons">{icon}</i>
      </button>
    </div>
  );
};

export default IconSwitch;
