import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const projectContainerStyles = style({
  minHeight: "100vh",
  position: "relative",
  display: "flex",
});

export const projectVideoStyles = style({
  objectFit: "cover",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
});

export const projectLayoutStyles = style({
  flex: 1,
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 40,
  padding: 150,
  zIndex: 3,
  position: "relative",

  "@media": {
    "(max-width: 1024px)": {
      padding: 16,
    },
  },
});

export const projectTextStyles = style({
  fontSize: 64,
  letterSpacing: "16px",
  fontWeight: 300,
  cursor: "pointer",
  color: globalTheme.colors.hint,
  transition: `color ${globalTheme.transition}`,
  userSelect: "none",

  ":hover": {
    color: globalTheme.colors.primary,
  },

  "@media": {
    "(max-width: 1024px)": {
      fontSize: 32,
    },
  },
});

export const activeProjectTextStyles = style({
  color: globalTheme.colors.primary,
});
