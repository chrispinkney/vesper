import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
// import { BoxArrowLeft } from 'react-bootstrap-icons';

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        {/* <BoxArrowLeft color="white" size={25} /> */}
        <Navbar.Brand className="m-auto">{this.props.headerText}</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
