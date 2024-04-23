import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const servicesContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 120,
  padding: "120px 150px",
  maxWidth: "calc(100vw - 300px)",
  width: 1400,
  margin: "0 auto",
  flex: 1,

  "@media": {
    "(max-width: 1024px)": {
      padding: "60px 24px",
      maxWidth: "calc(100vw - 48px)",
      gap: 40,
    },
  },
});

export const servicesTitleStyles = style({
  fontSize: globalTheme.fontSizes.bold,
  lineHeight: globalTheme.lineHeights.bold,
  fontWeight: 500,
  letterSpacing: "3px",
});

export const servicesRowStyles = style({
  display: "flex",
  gap: 80,

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      gap: 40,
    },
  },
});

export const servicesImageStyles = style({
  width: "calc(50% - 40px)",

  "@media": {
    "(max-width: 1024px)": {
      width: "100%",
    },
  },
});
