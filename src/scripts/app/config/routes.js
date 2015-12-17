import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import history from './history'
import App from '../components/App'
import Index from '../components/Index'

// Just for tests
import { RouteOne, RouteTwo, RouteThree} from '../components/TestRoutes';

// Refer to route configuration docs
// https://github.com/rackt/react-router/blob/latest/docs/guides/basics/RouteConfiguration.md
const routes = () => (
  <Router history={history}>
    <Route name="default" path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="one" component={RouteOne}/>
      <Route path="two" component={RouteTwo}/>
      <Route path="three" component={RouteThree}/>
      <Route path="*" component={Index}/>
    </Route>
  </Router>
);

export default routes;