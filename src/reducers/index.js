import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routeReducer} from 'react-router-redux';

import {VALIDATE_STATE, ERROR} from '../actions/index';

const USER_STATE = {
  user: '',
  authenticated: false
}

const {NOT_AUTHENTICATED, AUTHENTICATED} = VALIDATE_STATE;

function error(state = null, action){
  switch (action.type) {
    case ERROR:
      return (
        action.err
      );
    default:
      return (
        state
      );
  }
}

export function userCreate(state = USER_STATE, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return (
        Object.assign({}, state, {user: action.user.username, authenticated: true})
      );
    case NOT_AUTHENTICATED:
      return (
        Object.assing({}, state, {user: '', authenticated: false})
      );
    default:
    return (
      state
    );
  }
}

const rootReducer = combineReducers({
  user: userCreate,
  form: formReducer,
  error: error,
  routing: routeReducer
});

export default rootReducer;
