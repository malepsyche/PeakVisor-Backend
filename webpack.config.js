const path = require('path');

module.exports = {
  entry: './backend/server.ts', // Adjust to your entry file
  target: 'node',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2' // This is important for Node.js modules
  },
  resolve: {
    alias: {
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@controller': path.resolve(__dirname, 'src/controller/')
    },
    extensions: ['.js', '.json'] // Add or adjust extensions as needed
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, // Updated to include both regular and module JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  experiments: {
    outputModule: true // Enable if you're outputting an ES Module
  }
};
