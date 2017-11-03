const path = require("path");
const webpack = require("webpack")

const libraryName = "react-layout-views";

module.exports = function() {
  return {
    entry: {
      native: "./src/native",
      dist: "./src/dist" // web
    },
    output: {
      // path: './',
      filename: "[name]/index.js",
      library: libraryName,
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    externals: {
      "styled-components": {
        commonjs: "styled-components",
        commonjs2: "styled-components",
        amd: "styled-components",
        root: "styled-components"
      },
      "css-length": {
        commonjs: "css-length",
        commonjs2: "css-length",
        amd: "css-length",
        root: "css-length"
      },
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: "react"
      },
      "react-native": {
        commonjs: "react-native",
        commonjs2: "react-native",
        amd: "react-native",
        root: "react-native"
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          dead_code: true,
          unused: true
        }
      })
    ],
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "src")],
      extensions: [ ".tsx", ".ts", ".js" ]
    }
  };
};
