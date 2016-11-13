var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    __dirname + "/app/main.js"
  ],
  module: {
    loaders: [
      {
        test: /\.ya?ml$/,
        loader: 'json!yaml'
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.styl$/,
        loader: "style!css!stylus"
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel']
      },
      {
        test: /\.pegjs/,
        loader: 'raw'
      }
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      columns: false
    }),
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}
