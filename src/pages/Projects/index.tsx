import React from "react";
import classnames from "classnames";
import { Helmet } from "react-helmet";

import Header from "components/Header";
import Footer from "components/Footer";
import Typography from "components/Typography";

import { mainContainerStyles } from "styles/main.css";
import { darkThemeStyles } from "styles/themes/darkTheme.css";

import Project from "./Project";

import { projects } from "./projects";

import { projectsContainerStyles, projectsListContainerStyles, projectsListRowContainerStyles } from "./style.css";

function ProjectsPage() {
  const projectElements = React.useMemo(() => {
    const elements: React.ReactNode[] = [];

    for (let index = 0; index < projects.length; index++) {
      const project = projects[index];

      if (index === 0 || index === projects.length - 1) {
        elements.push(<Project key={project.id} project={project} width="100%" />);
        continue;
      }

      index++;
      const nextProject = projects[index];
      const firstWidth = index % 3 === 1 ? "40%" : "60%";
      const secondWidth = index % 3 === 1 ? "60%" : "40%";

      elements.push(
        <div key={`${project.id}-${nextProject.id}`} className={projectsListRowContainerStyles}>
          <Project project={project} width={firstWidth} />
          <Project project={nextProject} width={secondWidth} />
        </div>,
      );
    }

    return elements;
  }, []);

  return (
    <div className={classnames(mainContainerStyles, darkThemeStyles)}>
      <Helmet>
        <meta name="theme-color" content="#131313" />
        <title>ГОРПРОЕКТ - Проекты</title>
      </Helmet>
      <Header sticky />
      <div className={projectsContainerStyles}>
        <Typography fontSize="bold" lineHeight="bold" fontWeight="medium" letterSpacing="3px">
          ПРОЕКТЫ
        </Typography>
        <div className={projectsListContainerStyles}>{projectElements}</div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(ProjectsPage);
