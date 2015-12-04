import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from './stores/appStore';
import Actions from './actions/actionCreators.js';
import JSONLoader from './service/JSONLoader.js';
import ApplicationContainer from './components/applicationContainer';

// Name of the external configuration file to load
const configurationFileName = 'config.json';

// For testing
AppStore.subscribe(() => {
  console.log('Store updated', AppStore.getState());
});

const onLoadSuccess = (data) => {
  console.log('Config loaded', data);
  AppStore.dispatch(Actions.configLoaded());
  AppStore.dispatch(Actions.setConfig(data));
  ApplicationContainer.onLoadSuccess();
};

const onLoadError = (err) => {
  ApplicationContainer.onLoadError();
  throw new Error('Could not load configuration data. Aborting with error ',err);
};

// Show loading message
ApplicationContainer.initialize();

// Load local config JSON
JSONLoader.onSuccess(onLoadSuccess);
JSONLoader.onError(onLoadError);
JSONLoader.load(configurationFileName);