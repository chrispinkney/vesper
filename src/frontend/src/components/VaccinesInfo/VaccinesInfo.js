import React, { Component } from 'react';
import Header from '../Header/Header';

export default class VaccinesInfo extends Component {
  render() {
    return (
      <div>
        <Header headerText="Vaccines Info" infoState={false} />
        <h1>Vaccines Info!</h1>
      </div>
    );
  }
}
