export const VALIDATE_STATE = {
  AUTHENTICATED: 'AUTHENTICATED',
  NOT_AUTHENTICATED: 'NOT_AUTHENTICATED'
}
export const REGISTER_FIELDS = ['username', 'password'];
export const ERROR = 'ERROR';

const VALIDATE_STATE = {
  AUTHENTICATED,
  NOT_AUTHENTICATED
}

export function userLogin(user) {
  return (
    {
      type: AUTHENTICATED, user
    }
  );
}

export function userLogout(user) {
  return (
    {
      type: NOT_AUTHENTICATED, user
    }
  );
}

export function authenticationError(err) {
  return (
    type: ERROR, err
  );
}
