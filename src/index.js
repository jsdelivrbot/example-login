import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import {syncHistory} from 'react-router-redux';
import thunk from 'redux-thunk';
import {persistState} from 'redux-devtools';

import reducer from './reducers/index';
import routes from './routes';

import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb-authentication'));
export const db = new PouchDB('http://localhost:5984/test_db', {skipSetup: true});
const remoteCouch = false;
const reduxRouterMiddleware = syncHistory(browserHistory);


const createStoreWithMiddleware = compose(
  applyMiddleware(reduxRouterMiddleware),
  applyMiddleware(thunk),
)(createStore);

let store = createStoreWithMiddleware(reducer);
reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <div className="wrapper">
      <Router history={browserHistory} routes={routes} />
    </div>
  </Provider>
  , document.querySelector('.container'));
