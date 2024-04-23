import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const companyGroupTabContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 80,
  padding: "80px 150px",
  maxWidth: "calc(100vw - 300px)",
  width: 1400,
  margin: "0 auto",

  "@media": {
    "(max-width: 1024px)": {
      padding: "40px 24px",
      maxWidth: "calc(100vw - 48px)",
      gap: 40,
    },
  },
});

export const companyGroupTabTitleStyles = style({
  fontSize: globalTheme.fontSizes.bold,
  letterSpacing: "3px",
  fontWeight: 500,
});

export const companyGroupInfoContainerStyles = style({
  display: "flex",
  alignItems: "center",
  gap: 80,

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      gap: 40,
    },
  },
});

export const companyGroupInfoImageStyles = style({
  padding: "0 80px",
});

export const companyGroupInfoBodyStyles = style({
  fontSize: globalTheme.fontSizes.caption,
  lineHeight: globalTheme.lineHeights.caption,
});

export const companyGroupInfoBoldBodyStyles = style([
  companyGroupInfoBodyStyles,
  {
    fontWeight: 500,
  },
]);
