import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer navbar-fixed-bottom">
        <div className="container">
          <small>
            Demo login app using React, Redux, PouchDB, Bootstrap, and Mailgun.
          </small>
        </div>
      </footer>
    );
  }
}
