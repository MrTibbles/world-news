const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
  src: path.resolve(__dirname, "src/client"),
  dist: path.resolve(__dirname, "dist")
}

module.exports = (env = {}) => {
  const isInDev = env.production !== true;

  return {
    entry: path.resolve(PATHS.src, "app.js"),
    mode: isInDev ? "development" : "production",
    devtool: isInDev ? "eval" : "source-map",
    devServer: {
      hot: true,
      historyApiFallback: true,
      contentBase: PATHS.dist,
      port: 3000,
      stats: "errors-warnings",
    },
    output: {
      path: PATHS.dist,
      publicPath: "/",
      filename: "world-news.[name].[hash].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "linaria/loader",
              options: {
                sourceMap: isInDev
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                sourceMap: isInDev,
                hmr: isInDev
              }
            },
            "css-loader"
          ]
        },
        {
          test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
          use: [{ loader: "file-loader" }]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION_ENV: !isInDev
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "🌎 📰",
        template: path.resolve(PATHS.src, "static/index.html"),
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }
      }),
      new MiniCssExtractPlugin({
        filename: "linaria-styles.css"
      })
    ]
  };
};
