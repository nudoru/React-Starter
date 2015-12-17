import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from './stores/AppStore';
import Actions from './actions/actionCreators.js';
import ApplicationContainer from './containers/AppContainer.js';


// For testing
AppStore.subscribe(() => {
  console.log('Store updated', AppStore.getState());
});

//Router.run(Routes, function (Root) {
//  ReactDOM.render(<Root />, document.querySelector('#application'))
//});

ReactDOM.render(<ApplicationContainer config="config.json"/>, document.querySelector('#application'));