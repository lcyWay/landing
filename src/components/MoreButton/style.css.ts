import { globalStyle, style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const moreButtonContainerStyles = style({
  letterSpacing: "1px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  userSelect: "none",
  gap: 16,
  padding: "16px 0",
});

export const arrowContainerStyles = style({
  width: 50,
  height: 1,
  position: "relative",
  background: globalTheme.colors.primary,
  transform: "translateX(0px)",
  transition: `all ${globalTheme.transition}`,

  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

const arrowStyles = style({
  width: 14,
  height: 1,
  position: "absolute",
  right: 0,
  top: 0,
  background: globalTheme.colors.primary,
  transform: "rotate(0deg)",
  transformOrigin: "right center",
  transition: `all ${globalTheme.transition}`,
});

export const topArrowStyles = style([arrowStyles, {}]);
export const bottomArrowStyles = style([arrowStyles, {}]);

globalStyle(`${moreButtonContainerStyles}:hover ${arrowContainerStyles}`, {
  transform: "translateX(5px)",
});

globalStyle(`${moreButtonContainerStyles}:hover ${topArrowStyles}`, {
  transform: "rotate(45deg)",
  transitionDelay: ".2s",
});

globalStyle(`${moreButtonContainerStyles}:hover ${bottomArrowStyles}`, {
  transform: "rotate(-45deg)",
  transitionDelay: ".2s",
});
