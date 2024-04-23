import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const contactBlockContainerStyles = style({
  display: "flex",
  gap: 80,

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      gap: 40,
    },
  },
});

export const contactBlockLeftSideContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: "30%",

  "@media": {
    "(max-width: 1024px)": {
      width: "100%",
    },
  },
});

export const contactBlockDividerStyles = style({
  width: 50,
  height: 2,
  background: globalTheme.colors.primary,
  margin: "16px 0",
});

export const contactBlockPhonesContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const contactBlockRightSideContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  flex: 1,
});

export const contactBlockImageStyles = style({});

export const contactBlockMailsContainerStyles = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 16,
    },
  },
});
