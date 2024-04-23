import { createThemeContract } from "@vanilla-extract/css";

export const globalTheme = createThemeContract({
  palette: {
    primary: null,
    hint: null,
    border: null,
    background: null,
  },
  colors: {
    primary: null,
    hint: null,
  },
  fontSizes: {
    hint: null,
    normal: null,
    paragraph: null,
    caption: null,
    title: null,
    bold: null,
  },
  lineHeights: {
    hint: null,
    normal: null,
    paragraph: null,
    caption: null,
    title: null,
    bold: null,
  },
  transition: null,
});
