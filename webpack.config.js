const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
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
          minimize: false,
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
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    // new HtmlWebpack(),
    new HtmlWebpack({template:'./src/index.html', filename:'./index.html'}),
    // new MiniCssExtract(),
    new MiniCssExtract({filename: 'nuevo-estilo.css', ignoreOrder: false}),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/", to: "assets/" },
        // { from: "other", to: "public" },
      ],
    }),
  ],
};
