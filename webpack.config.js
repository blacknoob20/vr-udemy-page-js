const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
// const path = require('path');

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
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { 
        test: /styles.css$/, //Este es para copiar el archivo a la capeta dist con el plugin mini-css-extract-plugin
        use: [MiniCssExtract.loader, 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
      {
        // test: /\.(png|jpe?g|gif)$/i,
        test: /\.(jpe?g|png|gif|svg)$/i,
        // loader: 'file-loader',
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: "assets/img",
            }
          },
        ],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    // path: path.resolve(__dirname, 'dist'),
    clean: true,
    // publicPath: '/',
  },
  plugins: [
    // new HtmlWebpack(),
    new HtmlWebpack({template:'./src/index.html', filename:'./index.html'}),
    // new MiniCssExtract(),
    new MiniCssExtract({filename: 'estilo.css', ignoreOrder: false}),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/", to: "assets/" },
        // { from: "other", to: "public" },
      ],
    }),
  ],
};
