module.exports = {
  context: __dirname + "/src",
  entry  : {
    javascript: "./scripts/app/app.js",
    html      : "./index.html"
  },
  output : {
    filename: "./assets/scripts/app.js",
    path    : "./dist"
  },
  module : {
    loaders: [{
      test   : /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"]
    }, {
      test  : /\.html$/,
      loader: "file?name=[name].[ext]"
    }]
  }
};