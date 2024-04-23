import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const footerContainerStyles = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 50px",
  height: 79,
  borderTop: `1px solid ${globalTheme.palette.border}`,

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      padding: "24px 24px",
      alignItems: "flex-start",
      height: "auto",
      gap: 16,
    },
  },
});

export const footerTextStyles = style({
  color: globalTheme.colors.hint,
  lineHeight: globalTheme.lineHeights.normal,
  letterSpacing: "1px",
});

export const footerTelegramStyles = style([
  footerTextStyles,
  {
    textDecoration: "underline",
  },
]);
