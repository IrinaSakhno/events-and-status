import React from "react";
import classNames from "classnames";
import "./Toolbar.css";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const renderFilters = (filters) => {
    return filters.map((filter, index) => {
      return (
        <button
          className={classNames(
            "toolbar-button",
            selected === filter && "toolbar-button_active"
          )}
          key={index}
          onClick={onSelectFilter}
        >
          {filter}
        </button>
      );
    });
  };

  return <div className="toolbar">{renderFilters(filters)}</div>;
};

export default Toolbar;
