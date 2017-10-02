import React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="logdiv">
        <div className="logtit">LOGIN MASK</div>
        {/*()=>{
          if (!isAuthenticated()){
            return (<div className="btn" onClick={() => login()}>login</div>);
          }else{
            return (<div className="btn" onClick={() => logout()}>logout</div>);
          }
        }*/}
        <Link className="botnavitem" to="/login/facebook">aaa</Link>

      </div>
    );
  }
}
