import { createTheme } from "@vanilla-extract/css";

import { globalTheme } from "../theme.css";
import { baseTheme } from "./baseTheme.css";

export const darkThemeStyles = createTheme(globalTheme, {
  ...baseTheme,
  palette: {
    primary: "#0071e3",
    hint: "#131313",
    background: "#131313",
    border: "#6e6e6e50",
  },
  colors: {
    primary: "white",
    hint: "#a1a3a7",
  },
});
