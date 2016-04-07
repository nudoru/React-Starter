var Webpack           = require('webpack'),
    path              = require("path"),
    nodeModulesPath   = path.resolve(__dirname, 'node_modules'),
    buildPath         = path.resolve(__dirname, 'www', 'build'),
    mainPath          = path.resolve(__dirname, 'app', 'scripts', 'index.js'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // context        : __dirname + "/app",
  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry  : [
    // For hot style updates
    'webpack/hot/dev-server',
    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',
    // Our application
    mainPath
  ],

  // entry  : {
  //   javascript: "./scripts/index.js",
  //   html      : "./index.html"
  // },

  output: {
    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    path      : buildPath,
    filename  : "app.js",
    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/'
  },

  module         : {
    preLoaders: [
      {
        test   : /\.js$/,
        loader : "eslint-loader",
        exclude: [nodeModulesPath]
      }
    ],
    loaders   : [
      {
        test  : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
      {
        test  : /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test   : /\.sass$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test   : /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test  : /\.css$/,
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
        test  : /.*\/app\/.*\.js$/,
        loader: "uglify"
      },
      {
        test   : /\.js$/,
        exclude: [nodeModulesPath],
        loaders: ["react-hot", "babel-loader"]
      }
    ]
  },
  sassLoader     : {
    indentedSyntax: true
    // includePaths: [path.resolve(__dirname, "./app/sass/base"),
    //   path.resolve(__dirname, "./app/sass/components"),
    //   path.resolve(__dirname, "./app/sass/forms"),
    //   path.resolve(__dirname, "./app/sass/layout"),
    //   path.resolve(__dirname, "./app/sass/pages"),
    //   path.resolve(__dirname, "./app/sass/themes"),
    //   path.resolve(__dirname, "./app/sass/utils"),
    //   path.resolve(__dirname, "./app/sass/vendor")]
  },
  'uglify-loader': {
    mangle: false
  },
  eslint         : {
    configFile   : './.eslintrc',
    quiet        : false,
    failOnWarning: false,
    failOnError  : false
  },
  plugins        : [
    new Webpack.HotModuleReplacementPlugin()
    // new CopyWebpackPlugin([
    //   {from: 'config.json'}
    // ])
  ]
};