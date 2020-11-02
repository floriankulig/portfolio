import React from "react";
import { Project } from "../Project";
import { projects } from "../../constants";

export const Projects = () => {
  return (
    <ul className="projects__list">
      {projects &&
        projects.map((project) => (
          <li key={project.title}>
            <Project project={project} />
          </li>
        ))}
    </ul>
  );
};
