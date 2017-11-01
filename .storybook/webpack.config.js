var path = require('path')

module.exports = {
  context: __dirname,
  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    root: path.join(__dirname, "../src")
  }
}
