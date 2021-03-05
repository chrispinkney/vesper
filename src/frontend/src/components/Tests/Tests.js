import React, { Component } from 'react';
import { Row, Col, Form, ListGroup, Container, Button, Card, Table } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Header from '../Header/Header';
import QRCode from 'qrcode.react';
import DesktopBreakpoint from '../ResponsiveUtilities/DesktopBreakpoint';
import MobileBreakpoint from '../ResponsiveUtilities/MobileBreakpoint';

export default class Tests extends Component {
  state = {
    user: this.props.user,
    isTestDetails: false,
    testDetail: '',
    showQR: false,
    testsToGenerate: [],
  };

  showQR = (prevState) => {
    // this.setState((prevState) => ({ showQR: !prevState.showQR }));
    this.setState(() => ({ showQR: true }));
  };

  renderQR = () => {
    if (this.state.showQR && Object.keys(this.state.testsToGenerate).length === 0) {
      return (
        <Container className="justify-content-md-center" style={{ textAlign: 'center' }}>
          <Row className="justify-content-md-center" style={{ textAlign: 'center' }}>
            <QRCode
              value={JSON.stringify(this.state.user.tests)}
              size={128}
              bgColor={'#ffffff'}
              fgColor={'#000000'}
              level={'L'}
              includeMargin={false}
              renderAs={'svg'}
            />
          </Row>
          <Row className="justify-content-md-center" style={{ textAlign: 'center' }}>
            <p>
              <b>My Tests QR Code</b>
            </p>
          </Row>
        </Container>
      );
    } else if (this.state.showQR) {
      return (
        <Container className="justify-content-md-center" style={{ textAlign: 'center' }}>
          <Row className="justify-content-md-center" style={{ textAlign: 'center' }}>
            <QRCode
              value={JSON.stringify(this.state.testsToGenerate)}
              size={128}
              bgColor={'#ffffff'}
              fgColor={'#000000'}
              level={'L'}
              includeMargin={false}
              renderAs={'svg'}
            />
          </Row>
          <Row className="justify-content-md-center" style={{ textAlign: 'center' }}>
            <p>
              <b>My Customized Tests QR Code</b>
            </p>
          </Row>
        </Container>
      );
    }
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
          <DesktopBreakpoint>
            <Row className="justify-content-md-center">
              <Button variant="warning" onClick={() => this.toggleIsTestDetails()}>
                Go Back
              </Button>
            </Row>
          </DesktopBreakpoint>
          <MobileBreakpoint>
            <Row className="d-flex justify-content-center">
              <Button variant="warning" onClick={() => this.toggleIsTestDetails()}>
                Go Back
              </Button>
            </Row>
          </MobileBreakpoint>
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
                    <Form.Check disabled type="checkbox" label="Share Most Recent Only" />
                  </Form.Group>
                </Form>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check disabled type="checkbox" label="Share All" />
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

  recordCheckedTests = (event) => {
    // if the checkbox was just clicked
    const selectedTest = event.target.id;
    if (event.currentTarget.checked) {
      // checking for duplicate entries, does not work atm.
      // if (this.state.vaccinesToGenerate.find((disease) => disease.name === selectedDisease)) {
      //   console.log('Already included in this.state.vaccinesToGenerate');
      // } else {
      if (Object.keys(this.state.user.tests).includes(selectedTest)) {
        this.state.testsToGenerate.push({
          [selectedTest]: this.state.user.tests[`${selectedTest}`].results,
        });
      }
      console.log(this.state.testsToGenerate);
    }
    // checking for duplicate entries, does not work atm.
    // } else {
    //   for (var i = 0; i < Object.keys(this.state.user.vaccines).length; i++) {
    //     console.log('vaccines to generate: ', this.state.vaccinesToGenerate[i]);
    //     console.log('selected disease: ', selectedDisease);
    //     if (this.state.vaccinesToGenerate[i] === selectedDisease) {
    //       console.log('equal thing: ', this.state.vaccinesToGenerate[i]);
    //     } else if (this.state.vaccinesToGenerate[i] === undefined) {
    //       console.log('undefined');
    //     }
    //   }
    // }
  };

  getUsersTests = () => {
    return Object.entries(this.state.user.tests).map(([key, value]) => (
      <Row>
        <Col sm={10} style={{ textAlign: 'left' }}>
          <Form.Check
            key={key}
            type="checkbox"
            label={key}
            id={key}
            style={{ cursor: 'pointer' }}
            onChange={(e) => this.recordCheckedTests(e)}
          />
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
            <DesktopBreakpoint>
              <Row className="justify-content-md-center">
                <Button variant="primary" onClick={() => this.showQR()}>
                  Generate
                </Button>
              </Row>
            </DesktopBreakpoint>
            <MobileBreakpoint>
              <Row className="d-flex justify-content-center">
                <Button variant="primary" onClick={() => this.showQR()}>
                  Generate
                </Button>
              </Row>
            </MobileBreakpoint>
            <br />
            <Row className="justify-content-md-center">{this.renderQR()}</Row>
          </Container>
        </>
      );
    } else {
      return <>{this.renderTestDetails()} </>;
    }
  }
}
