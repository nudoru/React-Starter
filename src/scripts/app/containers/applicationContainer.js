import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from '../stores/appStore';
import Actions from '../actions/actionCreators.js';

import ApplicationLoadingView from '../components/applicationLoading.js';
import ApplicationLoadingErrorView from '../components/applicationLoadingError.js';
import ApplicationScaffoldView from '../components/applicationScaffold.js';

import JSONLoader from '../service/JSONLoader.js';

/**
 * Application container
 * Loads configuration data and displays the final application
 */

export default React.createClass({

  // We're loading the config data with no errors to start
  getInitialState() {
    return {loading: true, isError: false};
  },

  // Start loading the data
  componentDidMount() {
    JSONLoader.onSuccess((data) => {
      AppStore.dispatch(Actions.setConfig(data));
      this.setState({loading: false})
    });
    JSONLoader.onError(() => this.setState({loading: false, isError: true}));
    JSONLoader.load(this.props.config);
  },

  // Render the application view depending on loading/error or data loaded
  render() {
    if (this.state.loading) {
      return <ApplicationLoadingView/>;
    } else if (this.state.isError) {
      return <ApplicationLoadingErrorView/>;
    } else {
      return <ApplicationScaffoldView/>;
    }
  }

});