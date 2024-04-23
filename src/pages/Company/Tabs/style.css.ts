import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const tabsBackgroundStyles = style({
  display: "flex",
  justifyContent: "center",
  background: "#f7f7f7",
  position: "sticky",
  top: 110,
  left: 0,
  right: 0,
  zIndex: 3,

  "@media": {
    "(max-width: 1024px)": {
      position: "static",
    },
  },
});

export const tabsContainerStyles = style({
  display: "flex",
  alignItems: "center",
  maxWidth: "100vw",
  width: 1400,

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
    },
  },
});

export const tabsItemStyles = style({
  padding: 24,
  cursor: "pointer",
  userSelect: "none",
  letterSpacing: "1px",
  fontWeight: 500,
  fontSize: globalTheme.fontSizes.hint,
  borderBottom: "1px solid transparent",
  transition: `all ${globalTheme.transition}`,

  ":hover": {
    color: globalTheme.colors.hint,
  },
});

export const tabsActiveItemStyles = style([
  tabsItemStyles,
  {
    color: globalTheme.colors.hint,
    borderColor: globalTheme.colors.primary,
  },
]);
