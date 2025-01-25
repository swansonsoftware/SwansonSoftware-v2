const currentTask = process.env.npm_lifecycle_event
const path = require("path")
// const Dotenv = require("dotenv-webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const fse = require("fs-extra")

postCSSPlugins = [require("postcss-import"), require("postcss-mixins"), require("postcss-simple-vars"), require("postcss-nested"), require("autoprefixer")]

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy Images", function () {
      fse.copySync("./assets/images", "./dist/assets/images")
      fse.copySync("./album/images", "./dist/assets/images")
    })
  }
}

let cssConfig = {
  test: /\.css$/i,
  use: ["css-loader", { loader: "css-loader", options: { url: false }, loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
}
let babelConfig = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
    }
  }
}

let config = {
  entry: "./app/Main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  plugins: [
    // new Dotenv(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "app/index-template.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ],
  mode: "development",
  module: {
    rules: [cssConfig, babelConfig]
  }
}

if (currentTask == "webpackDev" || currentTask == "dev") {
  config.devtool = "source-map"
  config.devServer = {
    port: 3000,
    static: [
      {
        directory: path.join(__dirname, "app")
      }
    ],
    hot: true,
    liveReload: false,
    historyApiFallback: { index: "index.html" }
  }

  cssConfig.use.unshift("style-loader")
}

if (currentTask == "webpackBuild") {
  config.plugins.push(new CleanWebpackPlugin(), new RunAfterCompile(), new MiniCssExtractPlugin({ filename: "styles.[chunkhash].css" }))
  config.mode = "production"
  config.output = {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  }
  //from old config:
  cssConfig.use.unshift(MiniCssExtractPlugin.loader)
  config.optimization = {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()]
  }
}

module.exports = config
