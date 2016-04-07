var path = require("path"),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  entry  : {
    javascript: "./scripts/index.js",
    html      : "./index.html"
  },
  output : {
    filename: "./assets/scripts/app.js",
    path    : "./www"
  },
  plugins: [
    new CopyWebpackPlugin([
      {from:'config.json'}
    ])
  ],
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
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      },
      {
        test  : /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass"]
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
      },
      {
        // TODO add nudoru
        test: /.*\/app\/.*\.js$/,
        loader: "uglify"
      },
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      }

    ]
  },
  sassLoader: {
    //https://github.com/sass/node-sass
    indentedSyntax: true,
    includePaths: [path.resolve(__dirname, "./app/sass/base"),
      path.resolve(__dirname, "./app/sass/components"),
      path.resolve(__dirname, "./app/sass/forms"),
      path.resolve(__dirname, "./app/sass/layout"),
      path.resolve(__dirname, "./app/sass/pages"),
      path.resolve(__dirname, "./app/sass/themes"),
      path.resolve(__dirname, "./app/sass/utils"),
      path.resolve(__dirname, "./app/sass/vendor")]
  },
  'uglify-loader': {
    mangle: false
  },
  eslint: {
    configFile: './.eslintrc',
    quiet: false,
    failOnWarning: false,
    failOnError: false
  }
};