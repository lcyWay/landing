import React from "react";
import classnames from "classnames";

import { projects } from "pages/Projects/projects";

import {
  activeProjectTextStyles,
  projectContainerStyles,
  projectLayoutStyles,
  projectTextStyles,
  projectVideoStyles,
} from "./style.css";

const REVERSED_PROJECTS = projects.slice().reverse();

function Projects() {
  const [activeProject, setActiveProject] = React.useState(REVERSED_PROJECTS[0]);

  return (
    <div className={projectContainerStyles}>
      <video
        src={`/videos/${activeProject.src}.mp4`}
        className={projectVideoStyles}
        preload="none"
        autoPlay
        muted
        playsInline
        loop
      />
      <div className={projectLayoutStyles}>
        {REVERSED_PROJECTS.map((project) => {
          const isActive = project.id === activeProject.id;
          return (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={classnames(projectTextStyles, isActive && activeProjectTextStyles)}
            >
              {project.shortTitle}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Projects);
