import React from 'react';
//
import pic from '../img/pic.jpg';

export default class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: {}
    };
    this.voteChange=this.voteChange.bind(this);
  }

  voteChange(){
    let label=document.getElementById("votelabel");
    label.style.left=document.getElementById("ratectrl").value*10+"%";
    label.innerHTML=document.getElementById("ratectrl").value;
    /*el.className="btn sharebtn away";
    setTimeout(function(){
      el=document.getElementById("shareicons");
      el.className="shareicons";
    },700);*/
  }

  render() {
    return (
      <div className="maincont">
        <div className="profpic"><img src={pic}/></div>
        <div className="voteusername">Bruce Wayne</div>

        <div className="rangecont">
          {/*<div className="votelabel" id="votelabel">5</div>*/}
          <input type="range" id="ratectrl" min="0" max="10" defaultValue="5" step="0.01" onChange={this.voteChange}/>
        </div>

        <div>
          <div className="votelbl" id="votelabel">5</div>
        </div>

        <div className="ratebtnscont">
          <div className="btn votebtn" id="ratebtn" onClick={this.removeBtn}>RATE</div>
        </div>

        <div className="btn skipbtn" id="skipbtn" onClick={this.removeBtn}>skip...</div>

      </div>
    );
  }
}
