import React from 'react';
import logo from './img/logo.png';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="top">
        <img className="logo" src={logo} alt="logo"/>
        <div className="user">

          <span className="fa-stack fa-lg">
            <i className="fa fa-circle-o fa-stack-2x"></i>
            <i className="fa fa-user fa-stack-1x"></i>
          </span>

        </div>
      </div>
    );
  }
}
