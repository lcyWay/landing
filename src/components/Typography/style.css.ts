import { styleVariants } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";
import { baseTheme, mobileBaseTheme } from "styles/themes/baseTheme.css";

export type FontSizeStyleVariantsType = keyof typeof baseTheme.fontSizes;

export type LineHeightStyleVariantsType = keyof typeof baseTheme.lineHeights;

export type ColorStyleVariantsType = keyof typeof globalTheme.colors | "inherit";

export type FontWeightStyleVariantsType = keyof typeof fontWeightStyleVariants;

export type LetterSpacingStyleVariantsType = keyof typeof letterSpacingStyleVariants;

export const fontSizeStyleVariants = styleVariants(
  Object.fromEntries(
    Object.entries(baseTheme.fontSizes).map(([key, value]) => [
      key,
      {
        fontSize: value,
        "@media": {
          "(max-width: 1024px)": {
            fontSize: mobileBaseTheme.fontSizes[key as keyof typeof mobileBaseTheme.fontSizes],
          },
        },
      },
    ]),
  ),
);

export const lineHeightStyleVariants = styleVariants(
  Object.fromEntries(
    Object.entries(baseTheme.lineHeights).map(([key, value]) => [
      key,
      {
        lineHeight: value,
        "@media": {
          "(max-width: 1024px)": {
            lineHeight: mobileBaseTheme.lineHeights[key as keyof typeof mobileBaseTheme.lineHeights],
          },
        },
      },
    ]),
  ),
);

export const colorStyleVariants = styleVariants(
  Object.fromEntries([
    ["inherit", { color: "inherit" }],
    ...Object.entries(globalTheme.colors).map(([key, value]) => [key, { color: value }]),
  ]),
);

export const fontWeightStyleVariants = styleVariants({
  light: { fontWeight: 300 },
  regular: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semibold: { fontWeight: 600 },
});

export const letterSpacingStyleVariants = styleVariants({
  "0": { letterSpacing: "0px" },
  "0.5px": { letterSpacing: "0.5px" },
  "1px": { letterSpacing: "1px" },
  "3px": { letterSpacing: "3px" },
  "4px": { letterSpacing: "4px" },
});
