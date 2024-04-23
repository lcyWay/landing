import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const containerStyles = style({
  padding: 150,
  display: "flex",
  gap: 150,

  "@media": {
    "(max-width: 1024px)": {
      padding: "80px 24px",
      flexDirection: "column",
      gap: 80,
    },
  },
});

export const blockContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  flex: 1,

  "@media": {
    "(max-width: 1024px)": {
      gap: 16,
    },
  },
});

export const titleContainerStyles = style({
  letterSpacing: "1px",

  "@media": {
    "(max-width: 1024px)": {
      fontSize: globalTheme.fontSizes.hint,
      lineHeight: globalTheme.lineHeights.hint,
    },
  },
});

export const captionContainerStyles = style({
  fontSize: globalTheme.fontSizes.title,
  lineHeight: globalTheme.lineHeights.title,
  fontWeight: 300,

  "@media": {
    "(max-width: 1024px)": {
      fontSize: globalTheme.fontSizes.caption,
      lineHeight: globalTheme.lineHeights.caption,
    },
  },
});

export const bodyContainerStyles = style({
  fontSize: globalTheme.fontSizes.title,
  color: globalTheme.colors.hint,
  lineHeight: globalTheme.lineHeights.bold,
  fontWeight: 300,

  "@media": {
    "(max-width: 1024px)": {
      fontSize: globalTheme.fontSizes.paragraph,
      lineHeight: globalTheme.lineHeights.caption,
    },
  },
});
