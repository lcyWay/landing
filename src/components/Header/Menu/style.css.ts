import { globalStyle, style } from "@vanilla-extract/css";

import { showAnimationStyles } from "styles/animations.css";

import { globalTheme } from "styles/theme.css";

export const menuContainerStyles = style({
  display: "none",
  padding: "12px",

  "@media": {
    "(max-width: 1024px)": {
      display: "flex",
    },
  },
});

globalStyle(`${menuContainerStyles} *`, {
  fill: globalTheme.colors.primary,
});

export const menuModalContainerStyles = style({
  position: "fixed",
  left: 0,
  bottom: 0,
  top: 80,
  right: 0,
  background: globalTheme.palette.background,
  display: "flex",
  flexDirection: "column",
  gap: 4,
  paddingTop: 4,
});

export const menuModalItemStyles = style([
  showAnimationStyles,
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: `1px solid ${globalTheme.palette.border}`,
  },
]);
