import React from "react";
import "./ProjectList.css";

const ProjectList = ({ projects, selected }) => {
  const renderProjects = (projects) => {
    return projects.map((project, index) => {
      if (project.category === selected) {
        return (
          <img
            key={index}
            className="project"
            src={project.img}
            alt={project.category}
          />
        );
      }
      if (selected === "All") {
        return (
          <img
            key={index}
            className="project"
            src={project.img}
            alt={project.category}
          />
        );
      }
      return false;
    });
  };

  return <div className="project-list">{renderProjects(projects)}</div>;
};

export default ProjectList;
