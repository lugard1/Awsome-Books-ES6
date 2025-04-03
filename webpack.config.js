const path = require('path');

module.exports = {
  entry: './index.js', // Your main JS entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output folder for the bundled JS file
  },
  devServer: {
    static: {
      directory: path.join(__dirname), // Serve from the root directory
    },
    open: true, // Automatically open the browser
    port: 8080,
    historyApiFallback: true, // For SPAs, to prevent 404 on reload
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
};
