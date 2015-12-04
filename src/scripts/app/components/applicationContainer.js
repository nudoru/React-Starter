import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from '../stores/appStore';
import Actions from '../actions/actionCreators.js';
import ApplicationLoadingView from './applicationLoading.js';
import ApplicationLoadingErrorView from './applicationLoadingError.js';
import ApplicationView from './applicationScaffold.js';

const _appTargetEl = document.querySelector('#application');

// Display loading message
const initialize = () => {
  ReactDOM.render(<ApplicationLoadingView/>, _appTargetEl);
};

// Start and show the application
const onLoadSuccess = () => {
  ReactDOM.render(<ApplicationView/>, _appTargetEl);
};

// Show the error message
const onLoadError = () => {
  ReactDOM.render(<ApplicationLoadingErrorView/>, _appTargetEl);
};

export default {initialize, onLoadSuccess, onLoadError}