import React from 'react';

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
          <h1>PROFILE</h1>
        </div>
      </div>
    );
  }
}
