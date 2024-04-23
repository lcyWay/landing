import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const vacanciesContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 56,
  padding: "60px 150px 120px",
  maxWidth: "calc(100vw - 300px)",
  width: 1400,
  margin: "0 auto",
  flex: 1,

  "@media": {
    "(max-width: 1024px)": {
      padding: "20px 24px 80px",
      maxWidth: "calc(100vw - 48px)",
      gap: 40,
    },
  },
});

export const vacanciesTitleStyles = style({
  fontSize: globalTheme.fontSizes.bold,
  letterSpacing: "3px",
  fontWeight: 500,

  "@media": {
    "(max-width: 1024px)": {
      fontSize: globalTheme.fontSizes.caption,
    },
  },
});

export const vacanciesListContainerStyles = style({
  display: "flex",
  flexDirection: "column",
});
