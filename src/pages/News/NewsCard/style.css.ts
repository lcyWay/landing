import { style } from "@vanilla-extract/css";

export const newsCardContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  width: "calc(50% - 40px)",
  cursor: "pointer",

  "@media": {
    "(max-width: 1024px)": {
      width: "100%",
    },
  },
});

export const newsCardTitleStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const newsCardImageStyles = style({
  flex: 1,
  objectFit: "contain",
});
