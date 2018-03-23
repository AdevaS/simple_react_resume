import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app';
import NotFoundPage from './components/not_found_page';
import IndexPage from './components/index_page';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;