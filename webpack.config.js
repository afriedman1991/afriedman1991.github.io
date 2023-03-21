const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    gravity: './src/js/gravity.js',
    growingCircles: './src/js/growingCircles.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: './js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./dist/*'],
      notify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: 'src/index.html',
      chunks: ['gravity'] // Only include gravity.bundle.js in index.html
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/growingCircles.html',
      template: 'src/pages/growingCircles.html',
      chunks: ['growingCircles'] // Only include growingCircles.bundle.js in growingCircles.html
    })
  ],
  watch: true,
  devtool: 'source-map'
}
