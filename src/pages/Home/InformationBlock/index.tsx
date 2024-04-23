import React from "react";
import { Link } from "react-router-dom";

import MoreButton from "components/MoreButton";

import {
  containerStyles,
  blockContainerStyles,
  bodyContainerStyles,
  titleContainerStyles,
  captionContainerStyles,
} from "./style.css";

function InformationBlock() {
  return (
    <div className={containerStyles}>
      <div className={blockContainerStyles}>
        <div className={titleContainerStyles}>О КОМПАНИИ</div>
        <div className={bodyContainerStyles}>
          ГОРПРОЕКТ — российский лидер в области комплексного проектирования жилой и коммерческой недвижимости.
          Выполняем весь цикл проектирования: от оценки территории и разработки проектной документации до сдачи объекта
          в эксплуатацию.
        </div>
      </div>
      <div className={blockContainerStyles}>
        <div className={titleContainerStyles}>27 ИЮНЯ 2023</div>
        <div className={captionContainerStyles}>
          Ведущий строительный университет России НИУ МГСУ открыл двери для поступающих
        </div>
        <Link to="/news/niy_mgsy/">
          <MoreButton />
        </Link>
      </div>
    </div>
  );
}

export default React.memo(InformationBlock);
