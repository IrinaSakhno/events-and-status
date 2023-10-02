import React from "react";

const IconSwitch = ({ icon, onSwitch }) => {
  

  return <div className="icon-switch">
    <IconSwitch icon={"view_list"} onSwitch={() => console.log("change state here")}/>
  </div>;
};

export default IconSwitch;
