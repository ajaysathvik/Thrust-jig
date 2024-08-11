const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'App.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'App.bundle.js',
  },
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};