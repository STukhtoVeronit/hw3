const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/scripts/initialize.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
              failOnWarning: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['flow'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loder',
          'css-loader',
        ],
      },
    ],
  },
};
