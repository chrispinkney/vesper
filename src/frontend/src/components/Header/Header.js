import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { InfoCircle, PlusCircle } from 'react-bootstrap-icons';

export default class Header extends Component {
  state = { infoState: this.props.infoState, addState: this.props.addState };

  render() {
    if (!this.state.infoState) {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="m-auto">{this.props.headerText}</Navbar.Brand>
        </Navbar>
      );
      // } else if (this.state.addState) {
      //   return (
      //     <Navbar bg="dark" variant="dark">
      //       <PlusCircle color="white" size={20} />
      //       <Navbar.Brand className="m-auto">{this.props.headerText}</Navbar.Brand>
      //     </Navbar>
      //   );
    } else {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="m-auto">
            {this.props.headerText === 'Vaccines' ? (
              <>
                <Link to="/vaccines-info">
                  <InfoCircle color="white" size={20} />
                </Link>{' '}
                {this.props.headerText}{' '}
                <Link to="/addvaccines">
                  <PlusCircle color="white" size={20} />
                </Link>
              </>
            ) : (
              <>
                <Link to="/tests-info">
                  <InfoCircle color="white" size={20} />
                </Link>{' '}
                {this.props.headerText}{' '}
                <Link to="/addtests">
                  <PlusCircle color="white" size={20} />
                </Link>
              </>
            )}
          </Navbar.Brand>
        </Navbar>
      );
    }
  }
}
