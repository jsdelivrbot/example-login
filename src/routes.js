import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Register from './containers/Register';
import Login from './containers/Login';
import Success from './components/success';

export default (
<Route path="/" component = {App}>
  <IndexRoute component = {Register} />
  <Route patch="/login" component = {Login} />
  <Route path="/success" component = {Success} />
</Route>
);
