import React from "react";
import { Link } from "react-router-dom";

import Typography from "components/Typography";

import { ProjectInterface } from "../projects";

import { projectBodyStyles, projectContainerStyles, projectImageStyles } from "./style.css";

interface ProjectCardInterface {
  width: string;
  project: ProjectInterface;
}

function ProjectCard({ project, width }: ProjectCardInterface) {
  return (
    <Link to={`/projects/${project.id}/`} className={projectContainerStyles} style={{ width }}>
      <img className={projectImageStyles} src={`/images/projects_page/${project.src}.webp`} alt={project.title} />
      <div className={projectBodyStyles}>
        <Typography fontSize="bold" lineHeight="bold" letterSpacing="0.5px">
          {project.title}
        </Typography>
      </div>
    </Link>
  );
}

export default React.memo(ProjectCard);
