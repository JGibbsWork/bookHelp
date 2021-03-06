const path = require('path');

module.exports = {
  entry: path.join(__dirname, './FrontEnd/src'),
  output: {
    path: path.join(__dirname, './FrontEnd/dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        include: path.join(__dirname, './FrontEnd/src'),
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.jsx'],
  },
};
