# Express / Webpack / React / Redux / React-Router
 
Base starting point for my React projects.

Includes an Express server with the structure based on http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup

Front-end code is located in the 'front' folder.

## WebPack loaders

- SASS
- CSS autoprefixing to IE 11
- Web fonts
- Image inlining
- ESLint

## Styles

A basic application SASS set up in the `app/sass/app` folder. Several includes are provided for branding and variables to be used in the application. 

A tweaked version of the [Skeleton CSS framework](http://getskeleton.com) is used for basic structure and styling. It has been converted to a SCSS file and uses colors and fonts from the branding include.

Entry point for SASS is `app/sass/app/app.sass`. SASS and CSS are required in the main application JSX file at `app/scripts/app/App.js`.

## App Entry Point

`index.js` > `App.js` > `Default.js`

The entry point for the app is `app/scripts/index.js`. This file sets up a polyfill for promise support in IE 11 and then attaches `app/scripts/app/App.js` to the DOM in the `#appliation` div.

By default, the `App.js` will load the `www/config.json` file on start up. This external config file may be updated outside of the bundle to set configuration options for the application. The `render()` function will return a loading, error or the view from `components/Default.js`.

# Docker

## Build

Any changes to the server or webpack configurations will require rebuilding the container:

`docker build -t react-starter .`

## Running

We're mapping the local `front` source directort to the container's directory so that updates are caught by Webpack and the hot reloader.

`docker run -it -p 8080:3000 -v `pwd`/front:/usr/src/app/front react-starter`
`http://192.168.99.100:8080`

`docker run -it -p 8080:3000 react-starter`
