const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'sourcemap',
  resolve: {
    extensions: [".walt"]
  },
  module: {
    rules: [
      { test: /\.walt$/, use: 'walt-loader' }
    ]
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
