const path = require('path');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules[0] = {
    test: /\.(js|jsx)$/,
    include: [
      path.resolve(__dirname, '../stories/'),
      path.resolve(__dirname, '../../stories/')
    ],
    exclude: [
      path.resolve(__dirname, '../node_modules')
    ],
    loader: 'babel-loader'
  };

  config.resolve.modules.push(path.resolve(__dirname, '../../stories'));

  config.externals = {
    "react-native": {
      commonjs: "react-native",
      commonjs2: "react-native",
      amd: "react-native",
      root: "react-native"
    }
  }

  return config;
};