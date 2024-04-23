import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const textBlockStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  flex: 1,
});

export const textBlockTitleStyles = style({
  minHeight: globalTheme.lineHeights.bold,
});
