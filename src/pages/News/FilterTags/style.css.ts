import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const filterTagsContainerStyles = style({
  display: "flex",
  alignItems: "center",

  "@media": {
    "(max-width: 1024px)": {
      display: "none",
    },
  },
});

export const filterTagStyles = style({
  color: globalTheme.colors.primary,
  padding: "12px 24px",
  cursor: "pointer",
  borderBottom: "1px solid transparent",
  transition: `all ${globalTheme.transition}`,
  userSelect: "none",

  ":hover": {
    borderBottom: `1px solid ${globalTheme.colors.primary}`,
  },
});

export const filterActiveTagStyles = style([
  filterTagStyles,
  {
    color: globalTheme.colors.hint,
    borderBottom: `1px solid ${globalTheme.colors.hint}`,

    ":hover": {
      borderBottom: `1px solid ${globalTheme.colors.hint}`,
    },
  },
]);
