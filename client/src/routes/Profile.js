import React from 'react';
import Nav from '../Nav';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: {}
    };
  }

  render() {
    return (
      <div>
        <div className="profdiv">
          <h1>DAJEEEEE</h1>
        </div>
        <Nav/>
      </div>
    );
  }
}
