module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss"
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind", //
          "apply",
          "variants",
          "responsive",
          "screen"
        ]
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null
  }
};
