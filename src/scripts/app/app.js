import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from './stores/AppStore';
import Actions from './actions/actionCreators.js';
import ApplicationContainer from './containers/AppContainer.js';

// For testing
AppStore.subscribe(() => {
  console.log('Store updated', AppStore.getState());
});

ReactDOM.render(<ApplicationContainer config="config.json"/>, document.querySelector('#application'));