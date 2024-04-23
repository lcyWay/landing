import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const vacancyContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  padding: "8px 0",
});

export const vacancyTitleContainerStyles = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  paddingBottom: 8,
  borderBottom: `1px solid ${globalTheme.palette.border}`,

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
    },
  },
});

export const vacancyTitleSubContainerStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "30%",

  "@media": {
    "(max-width: 1024px)": {
      width: "100%",
    },
  },
});

export const vacancyTitleStyles = style({
  flex: 1,
});

export const vacancyCityStyles = style({
  width: "25%",
  userSelect: "none",

  "@media": {
    "(max-width: 1024px)": {
      width: "auto",
    },
  },
});

export const vacancyOpenStyles = style({
  userSelect: "none",
  width: "10%",
  textAlign: "right",

  "@media": {
    "(max-width: 1024px)": {
      width: "auto",
    },
  },
});

export const vacancyDescriptionVisibilityContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  height: 0,
  overflow: "hidden",
  transition: `height ${globalTheme.transition}`,
});

export const vacancyDescriptionContainerStyles = style({
  display: "flex",
  gap: 40,
  padding: "40px 0",

  "@media": {
    "(max-width: 1024px)": {
      gap: 24,
      flexDirection: "column",
    },
  },
});

export const vacancyDescriptionBlockStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  flex: 1,
});

export const vacancyDescriptionListStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});
