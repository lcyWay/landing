import { style } from "@vanilla-extract/css";

export const detailNewsContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  padding: "120px 150px",
  maxWidth: "calc(100vw - 300px)",
  width: 1400,
  margin: "0 auto",
  flex: 1,

  "@media": {
    "(max-width: 1024px)": {
      padding: "60px 24px",
      maxWidth: "calc(100vw - 48px)",
      gap: 24,
    },
  },
});
