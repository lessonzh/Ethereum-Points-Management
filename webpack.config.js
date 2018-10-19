const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './app/javascripts/app.js',
  devServer: {
    inline: true,
    port: 3333,
    contentBase: "./app"
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/customer.html', to: 'customer.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/bank.html', to: 'bank.html' }
    ]),
    new CopyWebpackPlugin([
      { from: './app/merchant.html', to: 'merchant.html' }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
