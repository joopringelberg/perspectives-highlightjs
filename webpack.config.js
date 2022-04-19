const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/languages/perspectives-arc.js" ),
  output: {
    library: "perspectivesarc",
    libraryTarget: "umd",
    filename: "perspectives-arc.js",
    path: path.join(__dirname, "dist")
  },
  watch: false,
  mode: "development",
  target: "web",
  module: {
    rules: []
  }
};
