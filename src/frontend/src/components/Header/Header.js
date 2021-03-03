import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
// import { BoxArrowLeft } from 'react-bootstrap-icons';
import { InfoCircle } from 'react-bootstrap-icons';

export default class Header extends Component {
  state = { infoState: this.props.infoState };

  render() {
    if (!this.state.infoState) {
      return (
        <Navbar bg="dark" variant="dark">
          {/* <BoxArrowLeft color="white" size={25} /> */}
          <Navbar.Brand className="m-auto">{this.props.headerText}</Navbar.Brand>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="dark" variant="dark">
          {/* <BoxArrowLeft color="white" size={25} /> */}
          <Navbar.Brand className="m-auto">
            {this.props.headerText}{' '}
            {this.props.headerText === 'Vaccines' ? (
              <Link to="/vaccines-info">
                <InfoCircle color="white" size={20} />
              </Link>
            ) : (
              <Link to="/tests-info">
                <InfoCircle color="white" size={20} />
              </Link>
            )}
          </Navbar.Brand>
        </Navbar>
      );
    }
  }
}
