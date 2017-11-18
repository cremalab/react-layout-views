var path = require("path");
const metroBundler = require('metro-bundler');

var config = {
  extraNodeModules: {
    "react-native": path.resolve(__dirname, "node_modules/react-native"),
    "react": path.resolve(__dirname, "node_modules/react"),
    "css-length": path.resolve(__dirname, "node_modules/css-length"),
    "styled-components": path.resolve(__dirname, "node_modules/styled-components"),
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, "../native"),
      path.resolve(__dirname, "../stories"),
      path.resolve(__dirname, "../web"),
    ];
  }
}
module.exports = config;