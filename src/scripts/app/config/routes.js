/*
React-Router set up file

Refer to route configuration docs
https://github.com/rackt/react-router/blob/latest/docs/guides/basics/RouteConfiguration.md
 */

import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import history from './history'
import App from '../components/App'
import Default from '../components/Default'

// Just for testing
import { RouteOne, RouteTwo, RouteThree} from '../components/TestRoutes';

const routes = () => (
  <Router history={history}>
    <Route name="default" path="/" component={App}>
      <IndexRoute component={Default}/>
      <Route path="one" component={RouteOne}/>
      <Route path="two" component={RouteTwo}/>
      <Route path="three" component={RouteThree}/>
      <Route path="*" component={Default}/>
    </Route>
  </Router>
);

export default routes;