const tailwindcss = require("tailwindcss");
const glob = require("glob-all");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");

const TailwindExtractor = content => {
  return content.match(/[\w-/:]+(?<!:)/g) || [];
};

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["public/index.html", "src/**/*.js", "src/**/*.jsx"],
  css: ["src/styles/*.css"],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ["css", "html", "js", "jsx"]
    }
  ],
  whitelist: ["html", "body"]
});

module.exports = ctx => {
  return {
    // Specify the locations of any files you want to scan for class names.
    paths: glob.sync(["src/**/*.js", "src/**/*.jsx"]),
    syntax: "postcss-scss",
    parser: "postcss-scss",
    plugins: [
      postcssImport,
      tailwindcss("./tailwind.config.js"),
      autoprefixer,
      ...(ctx.webpack.mode === "production" ? [purgecss] : [])
    ]
  };
};
