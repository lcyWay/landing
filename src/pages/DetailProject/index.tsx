import React from "react";
import classnames from "classnames";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import Typography from "components/Typography";

import { ProjectInterface, projects } from "pages/Projects/projects";

import { mainContainerStyles } from "styles/main.css";
import { darkThemeStyles } from "styles/themes/darkTheme.css";

import {
  detailProjectBodyStyles,
  detailProjectBodyTitleStyles,
  detailProjectContainerStyles,
  detailProjectImageStyles,
  detailProjectInfoBlockStyles,
  detailProjectInfoBlocksContainerStyles,
  detailProjectInfoContainerStyles,
} from "./style.css";

function colorByProjectType(projectId: string) {
  if (projectId === "ice_arena") return "#aba9fb";
  if (projectId === "moscow_city_square") return "#8cbbf7";
  return "#e3e7a9";
}

function DetailNewsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [projectData, setProjectData] = React.useState<ProjectInterface | null>(null);

  React.useEffect(() => {
    const foundData = projects.find((news) => news.id === id);

    if (!foundData) {
      navigate("/404/");
      return;
    }

    setProjectData(foundData);
  }, [id, navigate]);

  if (!projectData) return null;

  const color = colorByProjectType(projectData.id);

  return (
    <div className={classnames(mainContainerStyles, darkThemeStyles)}>
      <Helmet>
        <meta name="theme-color" content="#131313" />
        <title>ГОРПРОЕКТ - {projectData.shortTitle}</title>
      </Helmet>
      <Header />
      <div className={detailProjectContainerStyles}>
        <img
          src={`/images/projects_page/${projectData.src}.webp`}
          className={detailProjectImageStyles}
          alt={projectData.title}
        />
        <div className={detailProjectBodyStyles} style={{ color }}>
          <div className={detailProjectBodyTitleStyles}>{projectData.title.toUpperCase()}</div>
          <Typography
            fontSize="paragraph"
            lineHeight="paragraph"
            color="inherit"
            fontWeight="medium"
            letterSpacing="3px"
          >
            {projectData.city.toUpperCase()}
          </Typography>
        </div>
      </div>
      <div className={detailProjectInfoContainerStyles}>
        <div className={detailProjectInfoBlocksContainerStyles}>
          <div className={detailProjectInfoBlockStyles} style={{ color }}>
            <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px" color="inherit">
              ЗАКАЗЧИК
            </Typography>
            <Typography fontSize="paragraph" lineHeight="paragraph" color="hint">
              {projectData.customer}
            </Typography>
          </div>
          <div className={detailProjectInfoBlockStyles} style={{ color }}>
            <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px" color="inherit">
              ПЕРЕЧЕНЬ РАБОТ
            </Typography>
            <div>
              {projectData.works.map((work, index) => (
                <Typography key={index} fontSize="paragraph" lineHeight="caption" color="hint">
                  {work}
                </Typography>
              ))}
            </div>
          </div>
        </div>
        <div className={detailProjectInfoBlocksContainerStyles}>
          <div className={detailProjectInfoBlockStyles} style={{ color }}>
            <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px" color="inherit">
              СТАТУС
            </Typography>
            <Typography fontSize="paragraph" lineHeight="paragraph" color="hint">
              {projectData.status}
            </Typography>
          </div>
          <div className={detailProjectInfoBlockStyles} style={{ color }}>
            <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px" color="inherit">
              СТАДИЯ
            </Typography>
            <Typography fontSize="paragraph" lineHeight="paragraph" color="hint">
              {projectData.stage}
            </Typography>
          </div>
          <div className={detailProjectInfoBlockStyles} style={{ color }}>
            <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px" color="inherit">
              ПЕРИОД
            </Typography>
            <Typography fontSize="paragraph" lineHeight="paragraph" color="hint">
              {projectData.period}
            </Typography>
          </div>
        </div>
        <div className={detailProjectInfoBlocksContainerStyles}>
          <div className={detailProjectInfoBlockStyles} style={{ color }}>
            <Typography fontSize="hint" lineHeight="hint" fontWeight="medium" letterSpacing="1px" color="inherit">
              ОПИСАНИЕ
            </Typography>
            <Typography fontSize="paragraph" lineHeight="paragraph" color="hint">
              {projectData.description}
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(DetailNewsPage);
