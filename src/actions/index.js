import {routeActions} from 'react-router-redux';
import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb-authentication'));
import {db} from '../index';

export const VALIDATE_STATE = {
  AUTHENTICATED: 'AUTHENTICATED',
  NOT_AUTHENTICATED: 'NOT_AUTHENTICATED'
}
export const REGISTER_FIELDS = ['username', 'password'];
export const ERROR = 'ERROR';

const  {AUTHENTICATED, NOT_AUTHENTICATED} = VALIDATE_STATE;

export function userLoginChange(name) {
  return (
    {
      type: AUTHENTICATED, name
    }
  );
}

export function userLogoutChange(user) {
  return (
    {
      type: NOT_AUTHENTICATED, user
    }
  );
}

export function authenticationError(err) {
  return (
    {
      type: ERROR, err
    }
  );
}

export function userLogin(user) {
        console.log(user);

  return dispatch => {
    return (
      db.login(user.username, user.password, function (err, response) {
        if (err) {
          dispatch(authenticationError(err));
        } else {
          dispatch(userLoginChange(response.name))
          dispatch(routeActions.push('/success'))
        }
      })
    );
  }
}

export function userLogout() {
  return dispatch => {
    return (
      db.logout(function (err, response) {
        if (err) {
          dispatch(authenticationError(err))
        } else {
          dispatch(logoutRedirect(response))
        }
      })
    );
  }
}

export function logoutRedirect(response) {
  return dispatch => {
    return (
      dispatch(routeActions.push('/login'))
    )
  }
}

export function authCheck() {
  return dispatch => {
    return (
      db.getSession(function (err, response) {
        if (err) {
          console.debug(err);
          dispatch(userLogout(err));
        } else if (!response.userCtx.name) {
          dispatch(userLogout(err));
        } else {
          console.log(`${response.userCtx.name} logged in.`);
          dispatch(userLogin(response));
        }
      })
    );
  }
}

export function userCreate(fields) {
  return dispatch => {
    return db.signup(fields.username, fields.password, function (err, response) {
      if (err) {
        dispatch(authenticationError(err));
        dispatch(userLogout(err));
      } else {
        dispatch(userLogin(fields));
      }
    })
  }
}
