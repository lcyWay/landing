import React from "react";
import classNames from "classnames";

import {
  companyExpampleDividerStyles,
  companyExpampleItemStyles,
  companyExpamplesContainerStyles,
  companyInfoBlockStyles,
  companyInfoBlocksContainerStyles,
  companyTabBodyStyles,
  companyTabContainerStyles,
  companyTabTitleStyles,
} from "./style.css";

function CompanyTab() {
  return (
    <div id="#about" className={classNames("hashtab", companyTabContainerStyles)}>
      <div className={companyTabTitleStyles}>О КОМПАНИИ</div>
      <div className={companyTabBodyStyles}>
        Основное направление — комплексное проектирование жилых, общественных и промышленных зданий и сооружений.
        ГОРПРОЕКТ имеет беспрецедентный для России опыт проектирования и реализации небоскребов и уникальных сооружений.
      </div>
      <div className={companyInfoBlocksContainerStyles}>
        <div className={companyInfoBlockStyles}>
          ГОРПРОЕКТ — команда опытных инженеров-проектировщиков, конструкторов, архитекторов, руководителей и других
          специалистов высшего уровня. За плечами большинства из них многие годы работы в ведущих проектных организациях
          России и Европы.
        </div>
        <div className={companyExpamplesContainerStyles}>
          <div className={companyExpampleItemStyles}>
            <div className={companyExpampleDividerStyles} />
            Специалисты компании используют самые современные системы BIM-проектирования, что позволяет выполнять весь
            спектр работ качественно и в максимально сжатые сроки.
          </div>
          <div className={companyExpampleItemStyles}>
            <div className={companyExpampleDividerStyles} />
            Современный и удобный офис института расположен в центре Москвы и технически оснащен первоклассным
            оборудованием для выполнения задач любого масштаба.
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CompanyTab);
