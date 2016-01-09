import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from './stores/AppStore';
import Actions from './actions/actionCreators.js';
import ApplicationContainer from './containers/AppContainer.js';

// Polyfill Promise for IE11
require('es6-promise').polyfill();

ReactDOM.render(<ApplicationContainer config="config.json"/>, document.querySelector('#application'));