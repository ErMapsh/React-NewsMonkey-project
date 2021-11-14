import React, { Component } from "react";
// import PropTypes from 'prop-types'

export default class Alert extends Component {
  render() {
    return (
      <div style={{ height: "50px" }}>
        {this.props.alert && (
          <div
            className={`alert alert-${this.props.alert.type} text-center my-3`} 
            role="alert"
          >
            {this.props.UP(this.props.alert.type)} ❤{this.props.alert.msg}❤
          </div>
        )}
      </div>
    );
  }
}
