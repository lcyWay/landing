import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const companyTabContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 64,
  padding: "120px 150px 80px",
  maxWidth: "calc(100vw - 300px)",
  width: 1400,
  margin: "0 auto",

  "@media": {
    "(max-width: 1024px)": {
      padding: "80px 24px 80px",
      maxWidth: "calc(100vw - 48px)",
      gap: 40,
    },
  },
});

export const companyTabTitleStyles = style({
  fontSize: globalTheme.fontSizes.bold,
  letterSpacing: "3px",
  fontWeight: 500,
});

export const companyTabBodyStyles = style({
  fontSize: globalTheme.fontSizes.title,
  lineHeight: globalTheme.lineHeights.title,
  marginTop: 24,
  color: globalTheme.colors.hint,

  "@media": {
    "(max-width: 1024px)": {
      fontSize: globalTheme.fontSizes.paragraph,
      lineHeight: globalTheme.lineHeights.paragraph,
      marginTop: 0,
    },
  },
});

export const companyInfoBlocksContainerStyles = style({
  display: "flex",
  gap: 100,

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      gap: 40,
    },
  },
});

export const companyInfoBlockStyles = style({
  fontSize: globalTheme.fontSizes.caption,
  lineHeight: globalTheme.lineHeights.caption,
  flex: 1,
});

export const companyExpamplesContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  flex: 1,
});

export const companyExpampleItemStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  fontSize: globalTheme.fontSizes.caption,
  lineHeight: globalTheme.lineHeights.caption,
});

export const companyExpampleDividerStyles = style({
  width: 50,
  height: 2,
  background: globalTheme.colors.primary,
});
