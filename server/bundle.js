// Reference http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup

var Webpack          = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig    = require('./../webpack.config.js');

module.exports = function () {

  // First we fire up Webpack an pass in the configuration we created
  var bundler, bundleStart, compiler = Webpack(webpackConfig);

  // We give notice in the terminal when it starts bundling and set the time it started
  compiler.plugin('compile', function () {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  // We also give notice when it is done compiling, including the time it took.
  compiler.plugin('done', function () {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  bundler = new WebpackDevServer(compiler, {

    // We need to tell Webpack to serve our bundled application
    // from the build path. When proxying:
    // http://localhost:3000/build -> http://localhost:8080/build
    publicPath: '/build/',
    hot: true,
    quiet : false,
    noInfo: false,
    stats : {
      colors: true
    }
  });

  // We fire up the development server and give notice in the terminal
  // that we are starting the initial bundle
  bundler.listen(8080, 'localhost', function () {
    console.log('Bundling project, please wait...');
  });

};