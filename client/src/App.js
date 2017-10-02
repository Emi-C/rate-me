import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import Top from './Top';
import Login from './routes/Login';
import Profile from './routes/Profile';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: {}
    };
  }

  componentWillMount() {
    /*if (!isLoggedIn()){
      <Redirect to='/login'/>
    }*/
  }

  render() {
    return (
      <div>
        <Top user={this.state.user}/>
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
      </div>
    );
  }
}
