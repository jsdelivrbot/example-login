import React, {Component, PropTypes} from 'react';
import {createSelector} from 'reselect';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import Form from '../components/form';
import {SIGNUP_FIELDS, userLogin, Submit} from '../actions/index.js';

const usr = state => state.usr;
const error = state => state.error;

class Boilerplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dispatch, usr, error} = this.props;

    return (
      <Form inputs = {REGISTER_FIELDS} onSubmit = {fields => dispatch(userLogin(inputs))} formType={'REGISTER'} />
        {error ? error.message : null};
    );
  }
}

Boilerplate.propTypes = {
  usr: propTypes.object.isRequired;
}

export const check = createSelector({usr, error} => {
  return (
    {
      user,
      error
    }
  );
})

export default connect(check)(Boilerplate);
