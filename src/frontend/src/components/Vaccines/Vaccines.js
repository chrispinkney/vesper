import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  ListGroup,
  Spinner,
  Container,
  Button,
  Card,
  Table,
} from 'react-bootstrap';
import { ArrowRightCircle, CheckCircleFill, XCircle } from 'react-bootstrap-icons';
import Header from '../Header/Header';

export default class Vaccines extends Component {
  state = {
    testUser: {},
    user: this.props.user,
    diseases: [],
    isVaccineDetails: false,
    vaccineDetail: {},
    doses: [{}]
  };

  async componentDidMount() {
    const response = await fetch('api/getallvaccines');
    const json = await response.json();
    this.setState(() => ({ diseases: json }));
  }

  toggleIsVaccineDetails = (prevState) => {
    this.setState((prevState) => ({ isVaccineDetails: !prevState.isVaccineDetails }));
  };

  renderVaccineCheckMark = (disease) => {
    if (this.state.user.vaccines[`${disease}`]) {
      return <CheckCircleFill color="green" />;
    } else {
      return <XCircle color="red" />;
    }
  };

  renderDosesNeeded = (usersDoses) => {
    if (!usersDoses) return <td>No vaccination records found</td>;
    // console.log(Object.values(usersDoses));
    
    return Object.values(usersDoses).map((dose) => 
      return (
        <td>{dose[0]}</td>
      ))};
    // Object.values(usersDoses).map((dose) => console.log(dose['First Dose']));
    // var tdString = '<td>';
    // for (var i = 0; i < Object.keys(usersDoses.doses).length; i++) {
    //   tdString += Object.keys(usersDoses.doses[i]);
    // }
    // tdString += '</td>';
    // return tdString;
  // };
  renderDosesReceived = (usersDoses) => {
    if (!usersDoses) return <td>No vaccination records found</td>;
    return (
      <>
        <td>{Object.values(usersDoses.doses[0])}</td>
      </>
    );
  };

  renderVaccineDetails = () => {
    return (
      <>
        <Header headerText="Vaccines Details" infoState={false} />
        <br />
        <Container>
          <Row className="justify-content-md-center">
            <br />
            <Col xs={12}>
              <h5>{this.state.vaccineDetail.name}</h5>
            </Col>
            <Col xs={12}>
              <p>
                <b>Description:</b> {this.state.vaccineDetail.description}
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <b>Symptoms:</b> {this.state.vaccineDetail.symptoms.toString()}
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <b>Complications:</b> {this.state.vaccineDetail.symptoms.toString()}
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Table striped bordered hover>
              <thead>
                <tr style={{ textAlign: 'center' }}>
                  <th>Doses Needed</th>
                  <th>Doses Received</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: 'left' }}>
                  {/* <td>{Object.values(usersDoses).map((dose) => console.log(dose[0]))}</td> */}
                  <td>
                    {this.renderDosesNeeded(
                      this.state.user.vaccines[`${this.state.vaccineDetail.name}`]
                    )}
                  </td>
                  {/* {this.renderDosesReceived(
                    this.state.user.vaccines[`${this.state.vaccineDetail.name}`]
                  )} */}
                  {/* <td>First Dose</td>
                  <td>Feb 14. 2021</td> */}
                  {/* <td>{this.renderVaccineCheckMark(this.state.vaccineDetail.name)}</td> */}
                </tr>
                {/* <tr style={{ textAlign: 'left' }}>
                  <td>Second Dose</td>
                  <td>Mar 01. 2021</td>
                  <td>{this.renderVaccineCheckMark(this.state.vaccineDetail.name)}</td>
                </tr> */}
              </tbody>
            </Table>
          </Row>
          <br />
          <hr />
          <br />
          <Row className="justify-content-md-center">
            <Button variant="warning" onClick={() => this.toggleIsVaccineDetails()}>
              Go Back
            </Button>
            &emsp;
            <Button variant="success">Complications</Button>
          </Row>
        </Container>
      </>
    );
  };

  setVaccineDetails = (disease) => {
    this.setState(() => ({ vaccineDetail: disease }));
    this.toggleIsVaccineDetails(this.state.isVaccineDetails);
    // this.renderVaccineDetails();
  };

  renderVaccineCard = () => {
    return (
      <ListGroup.Item>
        <Container>
          <Form.Group controlId="formBasicCheckbox">
            {this.state.diseases.length === 0 ? (
              <Row>
                <Col sm={12} style={{ textAlign: 'center' }}>
                  <Spinner animation="border" />
                </Col>
              </Row>
            ) : (
              this.state.diseases.map((disease) => (
                <>
                  <Row>
                    <Col sm={10} style={{ textAlign: 'left' }}>
                      <Form.Check key={disease.name} type="checkbox" label={disease.name} />
                    </Col>
                    <Col sm={2} style={{ textAlign: 'right' }}>
                      <ArrowRightCircle size={20} onClick={() => this.setVaccineDetails(disease)} />
                    </Col>
                  </Row>
                </>
              ))
            )}
          </Form.Group>
        </Container>
      </ListGroup.Item>
    );
  };

  render() {
    if (!this.state.isVaccineDetails) {
      return (
        <>
          <Header headerText="Vaccines" infoState={true} />
          <br />
          <Container>
            <Row className="justify-content-md-center">
              <br />
              <Card style={{ width: '32rem' }}>
                <ListGroup variant="flush">{this.renderVaccineCard()}</ListGroup>
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
      return <>{this.renderVaccineDetails()} </>;
      // return <VaccineDetails disease={this.state.vaccineDetail} />;
    }
  }
}
