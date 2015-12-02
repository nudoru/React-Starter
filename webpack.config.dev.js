var path = require("path");

console.log('DEV');

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
    // TODO:
    // Generating errors https://github.com/bestander/uglify-loader
    // Review docs https://github.com/webpack/css-loader
    // https://github.com/jtangelder/sass-loader
    // Autoprefixer browser list https://github.com/ai/browserslist
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },

      {
        test  : /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.sass$/,
        loader: "style-loader!raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") + "&includePaths[]=" + path.resolve(__dirname, "./mixins/app_mixins")
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "ie 11"]}'
      },
      {
        test   : /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc',
    quiet: false,
    failOnWarning: false,
    failOnError: false
  }
};