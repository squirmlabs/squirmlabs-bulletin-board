import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Root from '../containers/Root';
import AppContainer from '../containers/AppContainer';

export default(
  <Route path="/" component={Root}>
    <IndexRoute component={AppContainer} />
  </Route>
);
