const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizer = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    contentBase: './dist',
    compress: true,
    host: '0.0.0.0',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { 
        test: /styles.css$/, //Este es para copiar el archivo a la capeta dist con el plugin mini-css-extract-plugin
        use: [MiniCssExtract.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        // loader: 'file-loader',
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizer(),
    ],
  },
  plugins: [
    // new HtmlWebpack(),
    new HtmlWebpack({template:'./src/index.html', filename:'./index.html'}),
    // new MiniCssExtract(),
    new MiniCssExtract({filename: '[name].[fullhash].css', ignoreOrder: false}),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/", to: "assets/" },
        // { from: "other", to: "public" },
      ],
    }),
  ],
};
