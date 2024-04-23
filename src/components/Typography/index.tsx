import React from "react";
import classnames from "classnames";

import {
  ColorStyleVariantsType,
  FontSizeStyleVariantsType,
  FontWeightStyleVariantsType,
  LetterSpacingStyleVariantsType,
  LineHeightStyleVariantsType,
  colorStyleVariants,
  fontSizeStyleVariants,
  fontWeightStyleVariants,
  letterSpacingStyleVariants,
  lineHeightStyleVariants,
} from "./style.css";

interface TypographyInterface extends React.HTMLAttributes<HTMLDivElement> {
  color?: ColorStyleVariantsType;
  fontSize?: FontSizeStyleVariantsType;
  lineHeight?: LineHeightStyleVariantsType;
  fontWeight?: FontWeightStyleVariantsType;
  letterSpacing?: LetterSpacingStyleVariantsType;
  className?: string;
  children?: React.ReactNode;
}

function Typography({
  children,
  className,
  color = "inherit",
  fontSize = "normal",
  lineHeight = "normal",
  fontWeight = "regular",
  letterSpacing = "0",
  ...props
}: TypographyInterface) {
  return (
    <div
      {...props}
      className={classnames(
        className,
        colorStyleVariants[color],
        fontSizeStyleVariants[fontSize],
        lineHeightStyleVariants[lineHeight],
        fontWeightStyleVariants[fontWeight],
        letterSpacingStyleVariants[letterSpacing],
      )}
    >
      {children}
    </div>
  );
}

export default React.memo(Typography);
