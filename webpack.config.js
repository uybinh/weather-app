const VueLoaderPlugin = require("vue-loader/lib/plugin")
const Path = require("path")

module.exports = {
  entry: "./src/main",
  output: {
    path: Path.resolve("./build"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  watch: true,
  plugins: [new VueLoaderPlugin()],
  watchOptions: {
    ignored: /node_modules/
  }
}
