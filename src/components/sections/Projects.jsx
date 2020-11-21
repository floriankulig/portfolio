import React from "react";
import i18next from "i18next";
import { Project } from "../Project"
import { useProjects } from "../../hooks"


export const Projects = () => {
  const projects = useProjects(i18next.language);

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
