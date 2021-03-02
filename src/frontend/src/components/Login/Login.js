import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

class Login extends Component {
  state = { province: this.props.headerText };

  render() {
    return (
      <>
        {!this.state.province ? (
          <Header headerText="Login" />
        ) : (
          <Header headerText={`${this.state.province} Login`} />
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
                  <br />
                  <br />
                  <br />
                  <br />
                  <Form.Control type="text" placeholder="Health Card Number" />
                  <br />
                  <Form.Control type="text" placeholder="E-Mail Address" />
                  <br />
                  <Form.Control type="text" placeholder="Password" />
                  <br />
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-md-center">
              <Col sm={3}>
                <Link to="/main">
                  <Button variant="success">Login</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Login;
