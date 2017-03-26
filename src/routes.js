import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import FormIndex from './components/form_index';
import Success from './components/success';

export default (
<Route path="/" component = {App}>
  <IndexRoute component = {FormIndex} />
  <Route path="/success" component = {Success} />
</Route>
);
