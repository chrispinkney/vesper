import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Tests extends Component {
  state = { user: this.props.user };

  render() {
    return (
      <div>
        <Header headerText="Tests" infoState={true} />
        <h1>Tests!</h1>
      </div>
    );
  }
}
