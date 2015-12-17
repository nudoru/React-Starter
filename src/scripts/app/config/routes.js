import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import AppScaffold from '../components/AppScaffold'
import { RouteOne, RouteTwo, RouteThree} from '../components/TestRoutes';

// Refer to route configuration docs
// https://github.com/rackt/react-router/blob/latest/docs/guides/basics/RouteConfiguration.md

const routes = () => (
  <Router>
    <Route name="default" path="/" component={AppScaffold}>
      <IndexRoute component={RouteOne}/>
      <Route name="two" path="two" component={RouteTwo}/>
      <Route name="three" path="three" component={RouteThree}/>
      <Route name="nomatch" path="*" component={RouteOne}/>
    </Route>
  </Router>
);

export default routes;