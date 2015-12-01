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
    //preLoaders: [
    //  {
    //    test: /\.js$/, // include .js files
    //    exclude: /node_modules/, // exclude any and all files in the node_modules folder
    //    loader: "jshint-loader"
    //  }
    //],
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
      }
    ]
  },
  jshint: {
    // any jshint option http://www.jshint.com/docs/options/
    // i. e.
    camelcase: true,
    curly: true,
    eqeqeq: true,
    freeze: true,
    esnext: true,
    eqnull: true,
    browser: true,
    undef: true,
    unused: true,
    maxdepth: '4',
    maxcomplexity: '30',
    maxparams: '4',
    "-W014": true,
    "-W030": true,
    "-W061": true,
    "-W069": true,
    "-W083": true,
    // jshint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,
    // jshint to not interrupt the compilation
    // if you want any file with jshint errors to fail
    // set failOnHint to true
    failOnHint: false
  }
};