import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from './stores/appStore';

import Actions from './actions/actionCreators.js';
import ApplicationView from './components/application.js';

import LoadConfig from './service/JSONLoader.js';

const configurationFileName = 'config.json';

// For testing
AppStore.subscribe(() => {
  console.log('Store updated', AppStore.getState());
});


const onLoadSuccess = (data) => {
  console.log('success!', data);
  AppStore.dispatch(Actions.configLoaded());
  AppStore.dispatch(Actions.setConfig(data));
  //ReactDOM.render(<ApplicationView/>, document.querySelector('#application'));
};

const onLoadError = (err) => {
  throw new Error('Could not load configuration data. Aborting with error ',err);
};

// Load local config JSON
LoadConfig.onSuccess(onLoadSuccess);
LoadConfig.onError(onLoadError);
LoadConfig.load(configurationFileName);