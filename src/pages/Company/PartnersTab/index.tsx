import React from "react";
import classnames from "classnames";

import {
  partnersBackgroundStyles,
  partnersCardImageStyles,
  partnersCardStyles,
  partnersCardsContainerStyles,
  partnersContainerStyles,
  partnersTitleStyles,
} from "./style.css";

function PartnersTab() {
  return (
    <div id="#partners" className={classnames("hashtab", partnersBackgroundStyles)}>
      <div className={partnersContainerStyles}>
        <div className={partnersTitleStyles}>ЗАКАЗЧИКИ</div>
        <div className={partnersCardsContainerStyles}>
          {new Array(17).fill(1).map((_, index) => (
            <div className={partnersCardStyles} key={index}>
              <img className={partnersCardImageStyles} src={`/images/company_page/${index + 1}.png`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(PartnersTab);
