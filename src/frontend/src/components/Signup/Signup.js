import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import Header from '../Header/Header';

export default class Signup extends Component {
  state = { province: this.props.province };

  render() {
    return (
      <>
        {!this.state.province ? (
          <Header headerText="Signup" infoState={false} />
        ) : (
          <Header headerText={`${this.state.province} Signup`} infoState={false} />
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
