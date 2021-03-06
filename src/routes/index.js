import React from 'react';
import { IndexRoute, Route } from 'react-router';

import AppContainer from '../containers/AppContainer';
import Board from '../component/board/Board';
import PostsNew from '../component/post-new/PostsNew';
import PostsDetails from '../component/post-details/PostsDetails';

export default(
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Board} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsDetails} />
  </Route>
);
