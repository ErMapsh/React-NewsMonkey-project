import React, { Component } from "react";

export default class Alert extends Component {
  render() {
    const UP = (word)=>{
      return word.toUpperCase();
    }
    return (
      this.props.alert && 
      (<div
        style={{ height: "55px" }}
        class = {`alert alert-${this.props.alert.type} text-center`}
        role="alert"
      >
        {UP(this.props.alert.type)} ❤{this.props.alert.msg}❤ 
      </div>)
    );
  }
}


