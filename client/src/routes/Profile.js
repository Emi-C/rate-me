import React from 'react';
//
import pic from '../img/pic.jpg';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: {}
    };
    this.removeBtn=this.removeBtn.bind(this);
  }

  removeBtn(){
    let el=document.getElementById("sharebtn");
    el.className="btn sharebtn away";
    setTimeout(function(){
      el=document.getElementById("shareicons");
      el.className="shareicons";
    },700);
  }
  removeShares(){
    let el=document.getElementById("shareicons");
    el.className="shareicons away";
    setTimeout(function(){
      el=document.getElementById("sharebtn");
      el.className="btn sharebtn";
    },700);
  }

  render() {
    return (
      <div className="maincont">
        <div className="profpic"><img src={pic}/></div>
        <div className="rate">7,62</div>
        <div className="rates">VOTES: 1342</div>
        <div className="sharecontainer">
          <div className="btn sharebtn" id="sharebtn" onClick={this.removeBtn}>SHARE</div>
          <div className="shareicons away" id="shareicons">
            <div className="shareicon fb"><i className="fa fa-facebook"></i></div>
            <div className="shareicon tw"><i className="fa fa-twitter"></i></div>
            <div className="shareicon ln"><i className="fa fa-linkedin"></i></div>
            <div className="shareicon rm" onClick={this.removeShares}><i className="fa fa-times"></i></div>
          </div>
        </div>
      </div>
    );
  }
}
