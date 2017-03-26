import React, {Component, PropTypes} from 'react';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

import {userLogout} from '../actions/index';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  logoutHandler() {
    this.props.dispatch(userLogout())
  }

  render() {
    const { dispatch, user } = this.props
    // if user is logged in show Hi username, else show 'You are note logged in.'
    return (
      <header className="page-header navbar navbar-inverted">
        <div className="container-fluid">
          <div className="logo nav navbar-nav navbar-left">
            <h3>LOGO HERE</h3>
          </div>
          <div className="userCheck nav navbar-nav navbar-right">
            <div>
              <h3>{user.username}</h3>
              <button onClick={this.logoutHandler.bind(this)}>Log Out</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired
}

const user = state => state.user;

export const userAuth = createSelector(
  user,
  (user) => {
    return {
      user
    }
  }
)

export default connect(userAuth)(Header);
