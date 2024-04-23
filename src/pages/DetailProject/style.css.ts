import { style } from "@vanilla-extract/css";

export const detailProjectContainerStyles = style({
  display: "flex",
  height: "100vh",
  position: "relative",
});

export const detailProjectImageStyles = style({
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  objectFit: "cover",
  height: "100%",
  width: "100%",
});

export const detailProjectBodyStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
  paddingTop: "48vh",
});

export const detailProjectBodyTitleStyles = style({
  fontSize: 48,
  letterSpacing: "5px",
  fontWeight: 300,

  "@media": {
    "(max-width: 1024px)": {
      fontSize: 18,
      textAlign: "center",
      lineHeight: "20px",
    },
  },
});

export const detailProjectInfoContainerStyles = style({
  display: "flex",
  justifyContent: "space-between",
  gap: 120,
  padding: "120px 150px",
  maxWidth: "calc(100vw - 300px)",
  width: 1400,
  margin: "0 auto",

  "@media": {
    "(max-width: 1024px)": {
      padding: "60px 24px",
      maxWidth: "calc(100vw - 48px)",
      gap: 40,
      flexDirection: "column",
    },
  },
});

export const detailProjectInfoBlocksContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 40,
  minWidth: 260,

  "@media": {
    "(max-width: 1024px)": {
      minWidth: "unset",
    },
  },
});

export const detailProjectInfoBlockStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});
