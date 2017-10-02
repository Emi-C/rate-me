import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Top from './Top';
import Login from './routes/Login';
import Profile from './routes/Profile';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: {}
    };
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <Top user={this.state.user}/>
        <h1>Available Users</h1>



        {Object.keys(this.state.users).map((key) => {
          return(<div key={this.state.users[key].id}>{this.state.users[key].username}</div>);
        })}



        
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
      </div>
    );
  }
}
