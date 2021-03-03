import React, { Component } from 'react';
import Header from '../Header/Header';

export default class TestsInfo extends Component {
  render() {
    return (
      <div>
        <Header headerText="Tests Info" infoState={false} />
        <h1>Tests Info!</h1>
      </div>
    );
  }
}
