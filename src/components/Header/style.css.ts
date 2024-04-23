import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const headerContainerStyles = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 109,
  padding: "0 50px",
  position: "fixed",
  left: 0,
  top: 0,
  right: 0,
  zIndex: 5,
  borderBottom: `1px solid ${globalTheme.palette.border}`,

  "@media": {
    "(max-width: 1024px)": {
      padding: "0 24px",
      height: 79,
    },
  },
});

export const stickyHeaderContainerStyles = style([
  headerContainerStyles,
  {
    background: globalTheme.palette.background,
  },
]);

export const stickyHeaderBackgroundStyles = style({
  height: 110,

  "@media": {
    "(max-width: 1024px)": {
      height: 80,
    },
  },
});

export const headerTitleStyles = style({
  fontSize: globalTheme.fontSizes.title,
  fontWeight: 600,
  letterSpacing: "4px",
  userSelect: "none",
});

export const headerNavContainerStyles = style({
  display: "flex",
  alignItems: "center",
  gap: 50,

  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

export const headerNavItemStyles = style({
  letterSpacing: "1px",
  cursor: "pointer",
  userSelect: "none",
  color: globalTheme.colors.primary,
  transition: `color ${globalTheme.transition}`,
  fontSize: globalTheme.fontSizes.hint,
  fontWeight: 500,

  ":hover": {
    color: globalTheme.colors.hint,
  },
});

export const headerActiveNavItemStyles = style([
  headerNavItemStyles,
  {
    color: globalTheme.colors.hint,
  },
]);
