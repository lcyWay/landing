import React from "react";

import Typography from "components/Typography";

import { textBlockStyles, textBlockTitleStyles } from "./style.css";

interface TextBlockInterface {
  title?: string;
  body: string;
}

function TextBlock({ body, title }: TextBlockInterface) {
  return (
    <div className={textBlockStyles}>
      <Typography className={textBlockTitleStyles} fontSize="bold" lineHeight="bold" letterSpacing="0.5px">
        {title}
      </Typography>
      <Typography fontSize="paragraph" lineHeight="caption" color="hint">
        {body}
      </Typography>
    </div>
  );
}

export default React.memo(TextBlock);
