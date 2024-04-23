import React from "react";
import classNames from "classnames";

import {
  factsCardContainerStyles,
  factsCardDescriptionStyles,
  factsCardNumberStyles,
  factsCardsContainerStyles,
  factsContainerStyles,
  factsTitleContainerStyles,
  factsTitleRowStyles,
} from "./style.css";

function FactsTab() {
  return (
    <div id="#facts" className={classNames("hashtab", factsContainerStyles)}>
      <div className={factsTitleContainerStyles}>
        <div className={factsTitleRowStyles}>ГОРПРОЕКТ основал в 2002 году Сергей Лахман.</div>
        <div className={factsTitleRowStyles}>Компания выросла из 5 сотрудников до 300 и стала лидером в сфере</div>
        <div className={factsTitleRowStyles}>генерального проектирования в России.</div>
      </div>
      <div className={factsCardsContainerStyles}>
        <div className={factsCardContainerStyles}>
          <div className={factsCardNumberStyles}>21</div>
          <div className={factsCardDescriptionStyles}>
            год компания занимает лидирующие позиции в сфере генерального проектирования в России.
          </div>
        </div>
        <div className={factsCardContainerStyles}>
          <div className={factsCardNumberStyles}>300</div>
          <div className={factsCardDescriptionStyles}>сотрудников работает в компании, средний возраст — 34 года.</div>
        </div>
        <div className={factsCardContainerStyles}>
          <div className={factsCardNumberStyles}>87</div>
          <div className={factsCardDescriptionStyles}>проектв мы выполнили и гордимся этим.</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FactsTab);
