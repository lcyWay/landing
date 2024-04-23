import { createTheme } from "@vanilla-extract/css";

import { globalTheme } from "../theme.css";
import { baseTheme } from "./baseTheme.css";

export const lightThemeStyles = createTheme(globalTheme, {
  ...baseTheme,
  palette: {
    primary: "#0071e3",
    hint: "#131313",
    background: "#fff",
    border: "#f0f0f1",
  },
  colors: {
    primary: "#464646",
    hint: "#a1a3a7",
  },
});
