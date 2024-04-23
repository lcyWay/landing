import React from "react";

import { arrowContainerStyles, bottomArrowStyles, moreButtonContainerStyles, topArrowStyles } from "./style.css";

function MoreButton() {
  return (
    <div className={moreButtonContainerStyles}>
      ПОДРОБНЕЕ
      <div className={arrowContainerStyles}>
        <div className={topArrowStyles} />
        <div className={bottomArrowStyles} />
      </div>
    </div>
  );
}

export default React.memo(MoreButton);
