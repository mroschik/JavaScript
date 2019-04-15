const path = require('path');

const conf = {
  entry: './js/start.js',
  output: {
    path: path.resolve('./js/'),
    filename: 'script.js',
    publicPath: 'js/'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }

};

module.exports = conf;