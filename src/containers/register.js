import React, {Component, PropTypes} from 'react';
import {createSelector} from 'reselect';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import Form from '../components/form';
import {REGISTER_FIELDS, userLogin, Submit} from '../actions/index.js';

const user = state => state.user;
const error = state => state.error;

class Boilerplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dispatch, user, error} = this.props;

    return (
      <div>
        <Form fields = {REGISTER_FIELDS} onSubmit = {fields => dispatch(userLogin(fields))} formType={'REGISTER'} />
          <span className="errorMessage">{error ? error.message : null}</span>
      </div>
    );
  }
}

Boilerplate.PropTypes = {
  user: PropTypes.object.isRequired
}

export const check = createSelector(user, error, (user, error) => {
  return (
    {
      user,
      error
    }
  );
})

export default connect(check)(Boilerplate);
