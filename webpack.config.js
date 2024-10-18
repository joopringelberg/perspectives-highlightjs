const path = require("path");

const nodeConfig = {
  entry: path.join(__dirname, "src/languages/perspectives-arc.js" ),
  output: {
    library: {
      type: 'commonjs2'
    },
    path: path.join(__dirname, "dist"),
    filename: 'perspectives-arc.node.js',
  },
  watch: false,
  mode: "development",
  target: 'node',
};

const webConfig = {
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

module.exports = [nodeConfig, webConfig]