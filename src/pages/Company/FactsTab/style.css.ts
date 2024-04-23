import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const factsContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100vw",
  width: 1400,
  margin: "0 auto",
  gap: 80,
  paddingBottom: 80,
  flex: 1,

  "@media": {
    "(max-width: 1024px)": {
      paddingBottom: 40,
      gap: 40,
    },
  },
});

export const factsTitleContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  padding: "80px 16px",
  border: `1px solid ${globalTheme.palette.border}`,
  borderLeft: 0,
  borderRight: 0,
});

export const factsTitleRowStyles = style({
  fontSize: globalTheme.fontSizes.title,
  fontWeight: 500,
  letterSpacing: "0.5px",

  "@media": {
    "(max-width: 1024px)": {
      textAlign: "center",
    },
  },
});

export const factsCardsContainerStyles = style({
  display: "flex",
  justifyContent: "space-between",

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      gap: 40,
    },
  },
});

export const factsCardContainerStyles = style({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,

  "@media": {
    "(max-width: 1024px)": {
      width: "100%",
    },
  },
});

export const factsCardNumberStyles = style({
  fontSize: 150,
  fontWeight: 300,
  color: globalTheme.colors.hint,
});

export const factsCardDescriptionStyles = style({
  fontSize: globalTheme.fontSizes.caption,
  lineHeight: globalTheme.lineHeights.caption,
  textAlign: "center",
});
