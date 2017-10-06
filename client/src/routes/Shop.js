import React from 'react';

export default class Shop extends React.Component {
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
          <h1>SHOP</h1>
        </div>
      </div>
    );
  }
}
