import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const careerInfoContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  padding: "120px 150px 80px",
  maxWidth: "calc(100vw - 300px)",
  width: 1400,
  margin: "0 auto",

  "@media": {
    "(max-width: 1024px)": {
      padding: "60px 24px",
      maxWidth: "calc(100vw - 48px)",
      gap: 20,
    },
  },
});

export const careerInfoTitleStyles = style({
  fontSize: globalTheme.fontSizes.bold,
  lineHeight: globalTheme.lineHeights.bold,
  letterSpacing: "3px",
  fontWeight: 500,
});

export const careerInfoBodyStyles = style({
  fontSize: globalTheme.fontSizes.title,
  lineHeight: globalTheme.lineHeights.title,
  color: globalTheme.colors.hint,
  marginTop: 40,

  "@media": {
    "(max-width: 1024px)": {
      fontSize: globalTheme.fontSizes.paragraph,
      lineHeight: globalTheme.lineHeights.paragraph,
      marginTop: 20,
    },
  },
});

export const careerDescriptionContainerStyles = style({
  display: "flex",
  alignItems: "center",
  gap: 100,

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      gap: 40,
    },
  },
});

export const careerDescriptionStyles = style({
  fontSize: globalTheme.fontSizes.caption,
  lineHeight: globalTheme.lineHeights.caption,
  flex: 1,

  "@media": {
    "(max-width: 1024px)": {
      fontSize: globalTheme.fontSizes.paragraph,
      lineHeight: globalTheme.lineHeights.paragraph,
    },
  },
});

export const careerContactsContainerStyles = style({
  flex: 1,
  background: "#f7f7f7",
  padding: "40px 50px",
  display: "flex",
  flexDirection: "column",
  gap: 16,

  "@media": {
    "(max-width: 1024px)": {
      padding: 24,
    },
  },
});

export const careerContactsBodyStyles = style({
  fontSize: globalTheme.fontSizes.caption,
  lineHeight: globalTheme.lineHeights.caption,

  "@media": {
    "(max-width: 1024px)": {
      fontSize: globalTheme.fontSizes.paragraph,
      lineHeight: globalTheme.lineHeights.paragraph,
    },
  },
});

export const careerContactsMailStyles = style({
  fontSize: globalTheme.fontSizes.title,
  fontWeight: 500,
  cursor: "pointer",
  transition: `color ${globalTheme.transition}`,

  ":hover": {
    color: globalTheme.colors.hint,
  },

  "@media": {
    "(max-width: 1024px)": {
      fontSize: globalTheme.fontSizes.caption,
    },
  },
});
