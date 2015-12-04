import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from './stores/appStore';
import Actions from './actions/actionCreators.js';
import ApplicationContainer from './containers/applicationContainer.js';

// For testing
AppStore.subscribe(() => {
  console.log('Store updated', AppStore.getState());
});

ReactDOM.render(<ApplicationContainer config="config.json"/>, document.querySelector('#application'));