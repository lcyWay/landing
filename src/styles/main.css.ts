import { style, globalStyle, globalFontFace } from "@vanilla-extract/css";

import { globalTheme } from "./theme.css";

globalFontFace("Graphik", {
  src: "url(/fonts/GraphikLCG-Light.woff2)",
  fontWeight: 300,
});

globalFontFace("Graphik", {
  src: "url(/fonts/GraphikLCG-Regular.woff2)",
  fontWeight: 400,
});

globalFontFace("Graphik", {
  src: "url(/fonts/GraphikLCG-Medium.woff2)",
  fontWeight: 500,
});

globalFontFace("Graphik", {
  src: "url(/fonts/GraphikLCG-Semibold.woff2)",
  fontWeight: 600,
});

export const mainContainerStyles = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  background: globalTheme.palette.background,
  transition: `background ${globalTheme.transition}`,
});

globalStyle("*", {
  fontFamily: "Graphik, sans-serif",
  fontSize: globalTheme.fontSizes.normal,
  color: globalTheme.colors.primary,
  textDecoration: "none",
});

globalStyle("body", {
  margin: 0,
});

globalStyle(".without-scroll", {
  overflow: "hidden",
  height: "100vh",
});

globalStyle(".link", {
  fontSize: "inherit",
  letterSpacing: "inherit",
  lineHeight: "inherit",
  fontWeight: "500",
});
