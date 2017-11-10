import React from 'react';
import logo from './img/logo.png';
import {Link} from 'react-router-dom';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="top">
        <Link to="/login"><img className="logo" src={logo} alt="logo"/></Link>
        <div className="user">
          {/*<span className="fa-stack fa-lg">
            <i className="fa fa-circle-o fa-stack-2x"></i>
            <i className="fa fa-user fa-stack-1x"></i>
          </span>*/}
          <i className="fa fa-cog fa-lg"></i>
        </div>
      </div>
    );
  }
}
