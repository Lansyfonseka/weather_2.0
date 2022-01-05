const path = require('path')

const HTMLWebpackPlagin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlagin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  devServer: {
    port: 4500,
    open: true,
    hot: true
  },
  plugins: [
    new HTMLWebpackPlagin({template: './main.html'}),
    new CleanWebpackPlugin(),
    new CopyPlagin( {
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/icons'),
          to: path.resolve(__dirname, 'dist/assets/icons')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}