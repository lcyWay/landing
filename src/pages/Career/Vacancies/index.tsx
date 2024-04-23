import React from "react";

import Vacancy from "./Vacancy";

import { vacancies } from "./vacancies";

import { vacanciesContainerStyles, vacanciesListContainerStyles, vacanciesTitleStyles } from "./style.css";

function Vacancies() {
  return (
    <div className={vacanciesContainerStyles}>
      <div className={vacanciesTitleStyles}>АКТУАЛЬНЫЕ ВАКАНСИИ</div>
      <div className={vacanciesListContainerStyles}>
        {vacancies.map((vacancy) => (
          <Vacancy key={vacancy.title} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Vacancies);
