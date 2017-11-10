import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="logdiv">
        <div className="logmask">
          <div className="logtit">Login</div>
          <div className="btn fb">Login with Facebook <i className="fa fa-facebook"></i></div>
          <div className="btn ggl">Login with Google <i className="fa fa-google"></i></div>
        </div>
      </div>
    );
  }
}
