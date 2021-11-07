import React, { Component } from "react";
// import PropTypes from 'prop-types'

export default class Alert extends Component {
  render() {
    
    return (
      this.props.alert && 
      (<div
        style={{ height: "55px" }}
        class = {`alert alert-${this.props.alert.type} text-center`}
        role="alert"
      >
        {this.props.UP(this.props.alert.type)} ❤{this.props.alert.msg}❤ 
      </div>)
    );
  }
}


