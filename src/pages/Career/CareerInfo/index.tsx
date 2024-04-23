import React from "react";

import {
  careerContactsBodyStyles,
  careerContactsContainerStyles,
  careerContactsMailStyles,
  careerDescriptionContainerStyles,
  careerDescriptionStyles,
  careerInfoBodyStyles,
  careerInfoContainerStyles,
  careerInfoTitleStyles,
} from "./style.css";

function CareerInfo() {
  return (
    <div className={careerInfoContainerStyles}>
      <div className={careerInfoTitleStyles}>КАРЬЕРА</div>
      <div className={careerInfoBodyStyles}>
        Работа в ГОРПРОЕКТЕ — участие в масштабных и уникальных проектах по всей России в команде опытных
        профессионалов.
      </div>
      <div className={careerDescriptionContainerStyles}>
        <div className={careerDescriptionStyles}>
          Компания предлагает конкурентную заработную плату, премии по результатам проектов, программу по повышению
          профессионального уровня сотрудников, в том числе участие в различных образовательных семинарах, специальных
          курсах по работе с современным программным обеспечением (например, Revit).
        </div>
        <div className={careerContactsContainerStyles}>
          <div className={careerContactsBodyStyles}>
            В связи с расширением штата и новыми масштабными проектами объявлен набор новых сотрудников. Направляйте,
            пожалуйста, свои резюме на адрес:
          </div>
          <div>
            <a href="mailto:hr@gorproject.ru" className={careerContactsMailStyles}>
              hr@gorproject.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CareerInfo);
