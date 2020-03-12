const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new WebpackBundleAnalyzer({
      analyzerMode: "static",
      reportFilename: "./report.html",
      generateStatsFile: true,
      statsOptions: {
        source: false
      },
      statsFilename: "./stats.json",
      openAnalyzer: true
    })
  ]
};
