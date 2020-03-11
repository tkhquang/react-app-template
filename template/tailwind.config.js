module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    function({ addVariant, e }) {
      addVariant("disabled", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}:disabled`;
        });
      });
    }
  ]
};
