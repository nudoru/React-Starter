/**
 * Application container
 * Loads configuration data and displays the final application
 * An external JSON file is used to provide set up data to the app outside of
 * the bundle file. Allows for configuration post build
 */

import React from 'react';
import AppStore from './stores/AppStore';
import Actions from './actions/actionCreators.js';
import CoverMesage from './components/CoverMessage.js';
import Routes from './config/routes';
import JSONLoader from '../nori/service/JSONLoader.js';

require('!style!css!../../css/vendor/normalize.css');
require('!style!css!../../css/fonts.css');
require('!style!css!sass!../../sass/app/app.sass');

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
      // Load config data
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
    return <CoverMesage heading='Please Wait' spinner='true'/>;
    

    // If we're in a loading or error state ...
    if (this.state.loading) {
      return <CoverMesage heading='Please Wait' spinner='true'/>;
    } else if (this.state.isError) {
      return <CoverMesage heading='Problem loading application'/>;
    }

    // AppShell component will wrap the content from the components attached
    // at the route endpoints
    // Default view is components/Default.js
    return Routes();
  }

}