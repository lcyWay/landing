import { globalStyle, style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const projectContainerStyles = style({
  display: "flex",
  height: 500,
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: 8,

  "@media": {
    "(max-width: 1024px)": {
      height: 300,
      width: "100% !important",
    },
  },
});

export const projectImageStyles = style({
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: "scale(1)",
  transition: `transform ${globalTheme.transition}`,
});

globalStyle(`${projectContainerStyles}:hover ${projectImageStyles}`, {
  transform: "scale(1.05)",
});

export const projectBodyStyles = style({
  display: "flex",
  alignItems: "flex-end",
  padding: 40,
  flex: 1,
  zIndex: 1,
  background: "rgba(0, 0, 0, 0.5)",
  transition: `background ${globalTheme.transition}`,

  "@media": {
    "(max-width: 1024px)": {
      padding: 16,
    },
  },
});

globalStyle(`${projectContainerStyles}:hover ${projectBodyStyles}`, {
  background: "rgba(0, 0, 0, 0.4)",
});
