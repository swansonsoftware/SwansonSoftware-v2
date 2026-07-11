const currentTask = process.env.npm_lifecycle_event

import path from "path"
import { fileURLToPath } from "url"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import HtmlWebpackHarddiskPlugin from "html-webpack-harddisk-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import fse from "fs-extra"
import postcssImport from "postcss-import"
import postcssMixins from "postcss-mixins"
import postcssSimpleVars from "postcss-simple-vars"
import postcssNested from "postcss-nested"
import autoprefixer from "autoprefixer"

const postCSSPlugins = [postcssImport(), postcssMixins(), postcssSimpleVars(), postcssNested(), autoprefixer()]
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy Images", function () {
      fse.copySync("./app/assets/images", "./dist/assets/images")
    })
  }
}

let cssConfig = {
  test: /\.css$/i,
  use: [
    {
      loader: "css-loader",
      options: { url: false }
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: postCSSPlugins
        }
      }
    }
  ]
}
let babelConfig = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "22" } }]]
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
      template: "./app/index-template.html",
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

if (currentTask == "webpackBuild" || currentTask == "build") {
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

export default config
