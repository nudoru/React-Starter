import React from 'react';
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

export default class AppContainer extends React.Component {

  // We're loading the config data with no errors to start
  constructor() {
    super();
    this.state = {loading: true, isError: false};
  }

  // Start loading the data
  componentDidMount() {
    let {config} = this.props;

    if (!config) {
      AppStore.dispatch(Actions.setConfig(null));
      this.setState({loading: false});
    } else {
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
    if (this.state.loading) {
      return <ApplicationLoadingView/>;
    } else if (this.state.isError) {
      return <ApplicationLoadingErrorView/>;
    } else {
      return <ApplicationScaffoldView/>;
    }
  }

}