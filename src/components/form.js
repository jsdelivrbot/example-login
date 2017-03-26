import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

import {REGISTER_FIELDS} from '../actions/index';

class Form extends Component {
  render() {
    const {
      fields: {username, password},
      handleSubmit,
      formType
    } = this.props
    return(
      <div className="container">
        <form onSubmit={handleSubmit} className="form-group">
          <div>
            <label for="username">email address:</label>
            <input type="text" placeholder="enter email address" className="form-control" aria-label="email address" {...username} />
            </div>
          <div>
            <label for="pwd">password:</label>
            <input type="password" className="form-control" />
          </div>
          <button onClick={handleSubmit} className="btn btn-primary" type="submit">{formType === 'REGISTER' ? 'Register' : 'Login'}</button>
        </form>
      </div>
    );
  }
}

Form.PropTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired
}

export default reduxForm({
  form: 'form',
  REGISTER_FIELDS
})(Form);
