/**
 * Application container
 * Loads configuration data and displays the final application
 * An external JSON file is used to provide set up data to the app outside of
 * the bundle file. Allows for configuration post build
 */

import React from 'react';
import AppStore from './stores/AppStore';
import Actions from './actions/actionCreators.js';
import AppLoadingView from './components/AppLoading.js';
import AppLoadingErrorView from './components/AppLoadingError.js';
import Routes from './config/routes';
import JSONLoader from '../nori/service/JSONLoader.js';

require('!style!css!../../css/vendor/normalize.css');

export default class AppContainer extends React.Component {

  constructor() {
    super();
    // Loading the config data with no errors to start
    this.state = {loading: true, isError: false};
  }

  componentDidMount() {
    let {config} = this.props;

    if (!config) {
      // No config
      AppStore.dispatch(Actions.setConfig(null));
      this.setState({loading: false});
    } else {
      // Start loading the data
      JSONLoader.onSuccess((data) => {
        AppStore.dispatch(Actions.setConfig(data));
        this.setState({loading: false})
      });
      JSONLoader.onError(() => this.setState({loading: false, isError: true}));
      JSONLoader.load(config);
    }
  }

  // Render the application view depending on loading/error or data loaded
  render() {
    // If we're in a loading or error state ...
    if (this.state.loading) {
      return <AppLoadingView/>;
    } else if (this.state.isError) {
      return <AppLoadingErrorView/>;
    }

    // AppShell component will wrap the content from the components attached
    // at the route endpoints
    // Default view is components/Default.js
    return Routes();
  }

}