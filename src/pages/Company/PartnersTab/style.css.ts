import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const partnersBackgroundStyles = style({
  display: "flex",
  background: "#fafafa",
  padding: "80px 0",
});

export const partnersContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 64,
  padding: "0 150px",
  maxWidth: "calc(100vw - 300px)",
  width: 1400,
  margin: "0 auto",

  "@media": {
    "(max-width: 1024px)": {
      padding: "0 24px",
      maxWidth: "calc(100vw - 48px)",
      gap: 20,
    },
  },
});

export const partnersTitleStyles = style({
  fontSize: globalTheme.fontSizes.bold,
  letterSpacing: "3px",
  fontWeight: 500,
});

export const partnersCardsContainerStyles = style({
  display: "flex",
  flexWrap: "wrap",
});

export const partnersCardStyles = style({
  width: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 1024px)": {
      width: "50%",
    },
  },
});

export const partnersCardImageStyles = style({
  objectFit: "contain",
  mixBlendMode: "multiply",
});
