import React, { Component } from 'react';
import AppBar from 'material-ui/core';

export class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>You're all signed up!</h1>
        <p>
          Please Proceed to <em>login</em>
        </p>
      </React.Fragment>
    );
  }
}

export default Success;
