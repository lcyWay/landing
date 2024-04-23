import React from "react";
import classNames from "classnames";

import {
  companyGroupInfoBodyStyles,
  companyGroupInfoBoldBodyStyles,
  companyGroupInfoContainerStyles,
  companyGroupInfoImageStyles,
  companyGroupTabContainerStyles,
  companyGroupTabTitleStyles,
} from "./style.css";

function CompanyGroupTab() {
  return (
    <div id="#companies" className={classNames("hashtab", companyGroupTabContainerStyles)}>
      <div className={companyGroupTabTitleStyles}>ГРУППА КОМПАНИЙ</div>
      <div className={companyGroupInfoContainerStyles}>
        <img className={companyGroupInfoImageStyles} src="/images/company_page/company_group.png" />
        <div className={companyGroupInfoBodyStyles}>
          <span className={companyGroupInfoBoldBodyStyles}>ООО «Академия БИМ»</span> — IT-компания по внедрению,
          сопровождению и обучению BIM-технологиям. Предоставляет самый полный комплекс услуг по внедрению технологии
          информационного моделирования BIM: аудит, поставка и настройка Autodesk Revit, внедрение, обучение BIM,
          сопровождение, разработка семейств и приложений для Revit, последующая поддержка и персональный BIM-менеджер.
        </div>
      </div>
    </div>
  );
}

export default React.memo(CompanyGroupTab);
