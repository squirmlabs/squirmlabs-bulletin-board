import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Root from '../containers/Root';
import SearchResults from '../component/search/SearchResults';

export default(
  <Route path="/" component={Root}>
    <IndexRoute component={SearchResults} />
    <Route path="results" component={SearchResults} />
  </Route>
);
