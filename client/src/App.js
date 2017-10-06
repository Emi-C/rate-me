import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import Top from './Top';
import Login from './routes/Login';
import Vote from './routes/Vote';
import Search from './routes/Search';
import Profile from './routes/Profile';
import Shop from './routes/Shop';
import Nav from './Nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: {}
    };
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <div>
        <Top user={this.state.user}/>
        <Route path="/login" component={Login}/>
        <Route path="/vote" component={Vote}/>
        <Route path="/search" component={Search}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/shop" component={Shop}/>
        <Nav />
      </div>
    );
  }
}
