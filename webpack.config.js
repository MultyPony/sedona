const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// let assetsPath = require.context('./common.blocks/', false, /\.(png|jpe?g|svg)$/);

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    hotel: './src/common.blocks/range-fieldset/range-fieldset.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(svg|png|jpg)$/i,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'images',
          esModule: false,
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: 'src/index.pug',
        inject: true,
        minify: false
    }),
    new HtmlWebpackPlugin({
        filename: 'hotels.html',
        template: 'src/hotels.pug',
        inject: true,
        minify: false
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
 ]
};
