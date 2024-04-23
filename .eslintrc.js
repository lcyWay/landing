module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["eslint-plugin-sonarjs"],
  extends: ["eslint:recommended", "react-app", "prettier"],
  rules: {
    "max-len": [
      "error",
      {
        code: 120,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-unused-expressions": "error",
    "no-unused-vars": "off",
    complexity: [
      "error",
      {
        max: 15,
      },
    ],
    "@typescript-eslint/no-unused-vars": ["error", {}],
    "jsx-a11y/alt-text": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-curly-spacing": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        distinctGroup: true,
        groups: [["builtin", "external"], "internal", "parent", "sibling", "index", "unknown"],
        pathGroupsExcludedImportTypes: ["builtin"],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
          },
          {
            pattern: "react-dom/**",
            group: "builtin",
          },

          {
            pattern: "components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "pages/**",
            group: "internal",
            position: "before",
          },

          {
            pattern: "styles/**",
            group: "parent",
            position: "before",
          },

          {
            pattern: "{.,..}/**/*.{ts,tsx}",
            group: "index",
          },

          {
            pattern: "{.,..}/**/*.css",
            group: "unknown",
          },
        ],
      },
    ],
  },
};
