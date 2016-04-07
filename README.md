# Express / Webpack / React / Redux / React-Router
 
Base starting point for my React projects.

Includes an Express server with the structure based on http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup

## WebPack loaders

- SASS
- CSS autoprefixing to IE 11
- Web fonts
- Image inlining
- ESLint

## Styles

Utilizes a scss tweaked [Skeleton CSS framework](http://getskeleton.com) for basic styling. Entry point for SASS is `app/sass/app/app.sass`.

SASS and CSS are required in the main application JSX file at `app/scripts/app/App.js`.

## App Entry Point

`index.js` > `App.js` > [Routes] > `AppShell.js` > Current route view

The entry point for the app is `app/scripts/index.js`. This file sets up a polypill for promise support in IE 11 and then attaches `app/scripts/app/App.js` to the DOM in the `#appliation` div.

By default, the `App.js` will load the `www/config.json` file on start up. This external config file may be updated outside of the bundle to set configuration options for the application. The `render()` function will return a loading, error or the current route view wrapped in `components/AppShell.js`. 

Routes are defined in `config/routes.js`. The default application view is `components/Default.js`.