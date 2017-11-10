import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
        <div className="botnav">
          <Link className="botnavitem" to="/profile"><i className="fa fa-user"></i></Link>
          <Link className="botnavitem" to="/vote"><i className="fa fa-star"></i></Link>
          <Link className="botnavitem" to="/search"><i className="fa fa-search"></i></Link>
          <Link className="botnavitem" to="/shop"><i className="fa fa-rocket"></i></Link>
        </div>
    );

  }
}
