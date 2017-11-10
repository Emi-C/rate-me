import React from 'react';
//
import pic from '../img/pic.jpg';


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
      <div className="maincont">
        <div className="searchcont">
          <input type="text" className="search" placeholder="Enter a friend's name"/><div className="lens"><i className="fa fa-search"></i></div>
        </div>

        <div className="resultscont">
          <div className="profresult">
            <div className="profpic small"><img src={pic}/></div>
            <div className="resname">Bruce Wayne</div>
            <div className="resrate">7.65</div>
            <div className="resratebtn">RATE</div>
          </div>

          <div className="profresult">
            <div className="profpic small"><img src={pic}/></div>
            <div className="resname">Emiliano Costanzo</div>
            <div className="resrate">7.65</div>
            <div className="resratebtn">RATE</div>
          </div>

          <div className="profresult">
            <div className="profpic small"><img src={pic}/></div>
            <div className="resname">Mastro Geppettolo</div>
            <div className="resrate">7.65</div>
            <div className="resratebtn">RATE</div>
          </div>
        </div>
      </div>
    );
  }
}
