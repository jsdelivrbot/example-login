import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    // if user is logged in show Hi username, else show 'You are note logged in.'
    return (
      <header className="page-header navbar navbar-inverted">
        <div className="container-fluid">
          <div className="logo nav navbar-nav navbar-left">
            <h3>LOGO HERE</h3>
          </div>
          <div className="userCheck nav navbar-nav navbar-right">
            <div>
              <h3>Hi User! or You Are Not Logged In</h3>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
