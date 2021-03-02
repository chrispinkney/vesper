import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import Header from '../Header/Header';

export class Signup extends Component {
  state = { ohipNumber: 0, province: this.props.headerText };

  render() {
    return (
      <>
        {!this.state.province ? (
          <Header headerText="Signup" />
        ) : (
          <Header headerText={`${this.state.province} Signup`} />
        )}
        <div className="col-xs-1 text-center">
          <Container>
            <Row className="justify-content-md-center">
              <Col sm={6}>
                <Form.Group>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Form.Control type="text" placeholder="Health Card Number" />
                  <br />
                  <Form.Control type="text" placeholder="Health Card Version Code" />
                  <br />
                  <Form.Control type="text" placeholder="Full Name" />
                  <br />
                  <Form.Control type="text" placeholder="Date of Birth" />
                  <br />
                  <Form.Control type="text" placeholder="E-Mail Address" />
                  <br />
                  <Form.Control type="text" placeholder="Password" />
                  <br />
                  <Form.Control type="text" placeholder="Confirm Password" />
                  <br />
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-md-center">
              <Col sm={3}>
                <Button variant="success">Signup</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Signup;
