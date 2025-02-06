import React, { Component } from "react";
class CBCprop1 extends Component {
  render() {
    console.log(this);
    return (
      <div>
        CBCprop1
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        <div>{this.props.desig[0]}</div>
        <h2>{this.props.userDetails.area}</h2>
        <button onClick={this.props.sendfun}>Click on Button</button>
      </div>
    );
  }
}
export default CBCprop1;
