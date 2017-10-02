import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="botnav">
          <div className="botnavitem active" onClick={()=>this.props.routerFunc(1)}><i className="fa fa-info-circle"></i></div>
          <div className="botnavitem" onClick={()=>this.props.routerFunc(2)}><i className="fa fa-trophy"></i></div>
          <div className="botnavitem" onClick={()=>this.props.routerFunc(3)}><i className="fa fa-list"></i></div>
          <Link className="botnavitem" to="/login">aaa</Link>
        </div>
    );

  }
}
