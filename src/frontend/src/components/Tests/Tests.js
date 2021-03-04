import React, { Component } from 'react';
import { Row, Col, Form, ListGroup, Container, Button, Card, Table } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Header from '../Header/Header';

export default class Tests extends Component {
  state = {
    user: this.props.user,
    isTestDetails: false,
    testDetail: '',
  };

  toggleIsTestDetails = (prevState) => {
    this.setState((prevState) => ({ isTestDetails: !prevState.isTestDetails }));
  };

  renderTableRow = (usersDoses) => {
    return Object.entries(usersDoses.results).map(([key, value]) => (
      <tr style={{ textAlign: 'center' }}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    ));
  };

  renderTestDetails = () => {
    return (
      <>
        <Header headerText="Test Details" infoState={false} />
        <br />
        <Container>
          <Row className="justify-content-md-center">
            <br />
            <Col xs={12} style={{ textAlign: 'center' }}>
              <h5>{this.state.testDetail}</h5>
              <br />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Table striped bordered hover style={{ width: '97%' }}>
              <thead>
                <tr style={{ textAlign: 'center' }}>
                  <th>Test Date</th>
                  <th>Test Result</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTableRow(this.state.user.tests[`${this.state.testDetail}`])}
              </tbody>
            </Table>
          </Row>
          <br />
          {this.renderTestTable()}
          <hr />
          <br />
          <Row className="justify-content-md-center">
            <Button variant="warning" onClick={() => this.toggleIsTestDetails()}>
              Go Back
            </Button>
          </Row>
        </Container>
      </>
    );
  };

  renderTestTable = () => {
    return (
      <Row className="justify-content-md-center">
        <table>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Share Most Recent Only" />
                  </Form.Group>
                </Form>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Share All" />
                  </Form.Group>
                </Form>
              </td>
            </tr>
          </tbody>
        </table>
      </Row>
    );
  };

  setTestDetails = (disease) => {
    this.setState({ testDetail: disease });
    this.toggleIsTestDetails(this.state.isTestDetails);
  };

  getUsersTests = () => {
    return Object.entries(this.state.user.tests).map(([key, value]) => (
      <Row>
        <Col sm={10} style={{ textAlign: 'left' }}>
          <Form.Check key={key} type="checkbox" label={key} />
        </Col>
        <Col sm={2} style={{ textAlign: 'right' }}>
          <ArrowRightCircle size={20} onClick={() => this.setTestDetails(key)} />
        </Col>
      </Row>
    ));
  };

  renderTestCard = () => {
    return (
      <ListGroup.Item>
        <Container>
          <Form.Group controlId="formBasicCheckbox">
            <>{this.getUsersTests()}</>
          </Form.Group>
        </Container>
      </ListGroup.Item>
    );
  };

  render() {
    if (!this.state.isTestDetails) {
      return (
        <>
          <Header headerText="Tests" infoState={true} />
          <br />
          <Container>
            <Row className="justify-content-md-center">
              <br />
              <Card style={{ width: '32rem' }}>
                <ListGroup variant="flush">{this.renderTestCard()}</ListGroup>
              </Card>
            </Row>
            <br />
            <hr />
            <br />
            <Row className="justify-content-md-center">
              <Button variant="primary">Generate</Button>
            </Row>
          </Container>
        </>
      );
    } else {
      return <>{this.renderTestDetails()} </>;
    }
  }
}
