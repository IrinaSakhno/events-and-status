import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";

const Portfolio = ({ filters, selected, projects, onSelectFilter }) => {
  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={projects} selected={selected} />
    </div>
  );
};

export default Portfolio;
