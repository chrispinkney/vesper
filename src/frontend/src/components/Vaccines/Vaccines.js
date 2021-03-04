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
    user: this.props.user,
    diseases: [],
    isVaccineDetails: false,
    vaccineDetail: {},
    vaccineTable: {},
  };

  async componentDidMount() {
    const response = await fetch('api/getallvaccines');
    const json = await response.json();
    this.setState(() => ({ diseases: json }));
  }

  toggleIsVaccineDetails = (prevState) => {
    this.setState((prevState) => ({ isVaccineDetails: !prevState.isVaccineDetails }));
  };

  // finds a disease that a user has clicked on
  // returns the vaccination schedule of that disease
  // this function is ONLY used in renderDosesNeeded()
  findDisease = () => {
    let disease = this.state.diseases.find((obj) => {
      return obj.name === `${this.state.vaccineDetail.name}`;
    });
    return disease['vaccination schedule'];
  };

  renderDosesNeeded = (usersDoses) => {
    // if the user has no vaccinations (doses) for that particular disease, return nothing
    if (!usersDoses)
      return (
        <tr style={{ textAlign: 'center' }}>
          <td>No vaccination records found</td>
          <td></td>
          <td>
            <XCircle color="red" />
          </td>
        </tr>
      );

    // declare a new object
    // find the disease that was clicked on by the user
    // set the new object's keys to the db's 'vaccination schedule' array
    // and set the values to the user's vaccination doses
    let VaccScheduleAndUserDoses = {};
    const disease = this.findDisease();
    disease.forEach((key, i) => (VaccScheduleAndUserDoses[key] = usersDoses.doses[i]));

    // generate a table using the newly created object above
    return Object.entries(VaccScheduleAndUserDoses).map(([key, value]) => (
      <tr style={{ textAlign: 'center' }}>
        <td>{key}</td>
        <td>{value}</td>
        <td>{value ? <CheckCircleFill color="green" /> : <XCircle color="red" />}</td>
      </tr>
    ));
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
                <b>Symptoms:</b>{' '}
                {this.state.vaccineDetail.symptoms.toString().replaceAll(',', ', ')}
              </p>
            </Col>
            <Col xs={12}>
              <p>
                <b>Complications:</b>{' '}
                {this.state.vaccineDetail.complications.toString().replaceAll(',', ', ')}
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Table striped bordered hover style={{ width: '97%' }}>
              <thead>
                <tr style={{ textAlign: 'center' }}>
                  <th>Doses Needed</th>
                  <th>Doses Received</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.renderDosesNeeded(
                  this.state.user.vaccines[`${this.state.vaccineDetail.name}`]
                )}
              </tbody>
            </Table>
          </Row>
          {this.renderVaccinationVerification()}
          <hr />
          <br />
          <Row className="justify-content-md-center">
            <Button variant="warning" onClick={() => this.toggleIsVaccineDetails()}>
              Go Back
            </Button>
          </Row>
        </Container>
      </>
    );
  };

  renderVaccinationVerification = () => {
    if (!this.state.user.vaccines[`${this.state.vaccineDetail.name}`]) {
      return (
        <Row className="text-center">
          <Col xs={12}>
            <XCircle color="red" size={50} />
            <br />
            <h5>Vaccination Not Complete</h5>
          </Col>
        </Row>
      );
    } else if (this.state.user.vaccines[`${this.state.vaccineDetail.name}`].status) {
      return (
        <Row className="text-center">
          <Col xs={12}>
            <CheckCircleFill color="green" size={50} />
            <br />
            <br />
            <h5>All Vaccine Completed</h5>
          </Col>
        </Row>
      );
    } else
      return (
        <Row className="text-center">
          <Col xs={12}>
            <XCircle color="red" size={50} />
            <br />
            <h5>Vaccination Not Complete</h5>
          </Col>
        </Row>
      );
  };

  setVaccineDetails = (disease) => {
    this.setState(() => ({ vaccineDetail: disease }));
    this.toggleIsVaccineDetails(this.state.isVaccineDetails);
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
    }
  }
}
