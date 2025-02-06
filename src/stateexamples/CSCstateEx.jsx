import React, {Component} from 'react'
class CSCstateEx extends Component {
    constructor(){
        super();
        this.state={
            username:"Ashhh"
    
        };
    }
   changeName=()=>{
    this.setState({username : "Hiii"});
   }
   render(){
    console.log(this);
    return (
      <div>
        CSCstateEx
        <h1>{this.state.username}</h1>
        <button onClick={this.changeName}>Update the state</button>
      </div>
    );
}
}
export default CSCstateEx;