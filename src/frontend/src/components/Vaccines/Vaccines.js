import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Header from '../Header/Header';

export default class Vaccines extends Component {
  state = { user: this.props.user };

  render() {
    return (
      <>
        <Header headerText="Vaccines" infoState={true} />
        <div className="col-xs-1 text-center">
          <Container>
            <Row className="justify-content-md-center">
              <Col sm={2}>
                <h1>{this.state.user.fullName}</h1>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col sm={3}>
                <p>DOB:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.user.dateOfBirth}</p>
              </Col>
            </Row>
            <br />
            <Row className="justify-content-md-center">
              <table>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'left' }}>OHIP Number:</td>
                    <td style={{ textAlign: 'left' }}>&emsp;{this.state.user.ohipNumber}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'left' }}>OHIP Version Code:</td>
                    <td style={{ textAlign: 'left' }}>&emsp;{this.state.user.ohipVersionCode}</td>
                  </tr>
                </tbody>
              </table>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
