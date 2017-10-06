import React from 'react';

export default class Search extends React.Component {
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
          <h1>SEARCH</h1>
        </div>
      </div>
    );
  }
}
