import React from 'react';

export default class Vote extends React.Component {
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
          <h1>VOTE</h1>
        </div>
      </div>
    );
  }
}
