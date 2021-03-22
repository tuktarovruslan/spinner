'use strict';
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const plugins = () => {

  const pluginsArray = [
    new HTMLWebpackPlugin({template: "./src/index.html"}),
    new CleanWebpackPlugin()
  ];

  return pluginsArray;
};

module.exports = {
  mode: NODE_ENV == 'development' ? 'development' : 'production',
  module: {
    rules: [
      {
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.js$/,
				use: ["source-map-loader"],
				exclude: /node_modules/,
				enforce: "pre"
			},
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: ['file-loader']
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  entry: {
    index: [
      path.join(__dirname, 'src/index.tsx')
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  watch: NODE_ENV == 'development',
  devtool: NODE_ENV == 'development' ? 'source-map' : false,
  devServer: {
    port:3000,
    contentBase: "./dist",
  },
  plugins: plugins(),
  optimization: {
    noEmitOnErrors: true
  },
};
