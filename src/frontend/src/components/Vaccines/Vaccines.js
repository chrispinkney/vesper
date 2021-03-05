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
import QRCode from 'qrcode.react';
import DesktopBreakpoint from '../ResponsiveUtilities/DesktopBreakpoint';
import MobileBreakpoint from '../ResponsiveUtilities/MobileBreakpoint';
import './Vaccines.css';

export default class Vaccines extends Component {
  state = {
    user: this.props.user,
    diseases: [],
    isVaccineDetails: false,
    vaccineDetail: {},
    vaccinesToGenerate: [],
    showQR: false,
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
            <DesktopBreakpoint>
              <Col xs={12}>
                <h5>{this.state.vaccineDetail.name}</h5>
              </Col>
            </DesktopBreakpoint>
            <MobileBreakpoint>
              <Col className="d-flex justify-content-center">
                <h5>{this.state.vaccineDetail.name}</h5>
              </Col>
            </MobileBreakpoint>
            <DesktopBreakpoint>
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
            </DesktopBreakpoint>
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
          <DesktopBreakpoint>
            <Row className="justify-content-md-center">
              <Button variant="warning" onClick={() => this.toggleIsVaccineDetails()}>
                Go Back
              </Button>
            </Row>
          </DesktopBreakpoint>
          <MobileBreakpoint>
            <Row className="d-flex justify-content-center">
              <Button variant="warning" onClick={() => this.toggleIsVaccineDetails()}>
                Go Back
              </Button>
            </Row>
          </MobileBreakpoint>
        </Container>
      </>
    );
  };

  renderVaccinationVerification = () => {
    if (!this.state.user.vaccines[`${this.state.vaccineDetail.name}`]) {
      return (
        <Row className="text-center">
          <DesktopBreakpoint>
            <Col xs={12}>
              <XCircle color="red" size={50} />
              <br />
              <h5>Vaccination Not Complete</h5>
            </Col>
          </DesktopBreakpoint>
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
        <>
          <DesktopBreakpoint>
            <Row className="text-center">
              <Col xs={12}>
                <XCircle color="red" size={50} />
                <br />
                <h5>Vaccination Not Complete</h5>
              </Col>
            </Row>
          </DesktopBreakpoint>
          <MobileBreakpoint>
            <br />
            <br />
            <Row className="text-center">
              <Col xs={12}>
                <XCircle color="red" size={130} />
                <br />
                <br />
                <br />
                <h5>Vaccination Not Complete</h5>
              </Col>
            </Row>
            <br />
            <br />
          </MobileBreakpoint>
        </>
      );
  };

  setVaccineDetails = (disease) => {
    this.setState(() => ({ vaccineDetail: disease }));
    this.toggleIsVaccineDetails(this.state.isVaccineDetails);
  };

  recordCheckedVaccines = (event) => {
    // if the checkbox was just clicked
    const selectedDisease = event.target.id;
    if (event.currentTarget.checked) {
      // checking for duplicate entries, does not work atm.
      // if (this.state.vaccinesToGenerate.find((disease) => disease.name === selectedDisease)) {
      //   console.log('Already included in this.state.vaccinesToGenerate');
      // } else {
      if (Object.keys(this.state.user.vaccines).includes(selectedDisease)) {
        this.state.vaccinesToGenerate.push({
          [selectedDisease]: this.state.user.vaccines[`${selectedDisease}`],
        });
      }
      console.log(this.state.vaccinesToGenerate);
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

  renderVaccineCard = () => {
    return (
      <>
        <DesktopBreakpoint>
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
                    <Row style={{ cursor: 'pointer' }}>
                      <Col sm={10} style={{ textAlign: 'left', cursor: 'pointer' }}>
                        <Form.Check
                          key={disease.name}
                          type="checkbox"
                          id={disease.name}
                          label={disease.name}
                          style={{ cursor: 'pointer' }}
                          onChange={(e) => this.recordCheckedVaccines(e)}
                        />
                      </Col>
                      <Col sm={2} style={{ textAlign: 'right' }}>
                        <ArrowRightCircle
                          size={20}
                          style={{ cursor: 'pointer' }}
                          onClick={() => this.setVaccineDetails(disease)}
                        />
                      </Col>
                    </Row>
                  ))
                )}
              </Form.Group>
            </Container>
          </ListGroup.Item>
        </DesktopBreakpoint>
        <MobileBreakpoint>
          <ListGroup.Item id="hi">
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
                    <Row style={{ cursor: 'pointer' }}>
                      <Col sm={10} style={{ textAlign: 'left', cursor: 'pointer' }}>
                        <Form.Check
                          key={disease.name}
                          type="checkbox"
                          id={disease.name}
                          label={disease.name}
                          style={{ cursor: 'pointer' }}
                          onChange={(e) => this.recordCheckedVaccines(e)}
                        />
                      </Col>
                      <Col sm={2} style={{ textAlign: 'right' }}>
                        <ArrowRightCircle
                          size={20}
                          style={{ cursor: 'pointer' }}
                          onClick={() => this.setVaccineDetails(disease)}
                        />
                      </Col>
                    </Row>
                  ))
                )}
              </Form.Group>
            </Container>
          </ListGroup.Item>
        </MobileBreakpoint>
      </>
    );
  };

  showQR = (prevState) => {
    // this.setState((prevState) => ({ showQR: !prevState.showQR }));
    this.setState(() => ({ showQR: true }));
  };

  renderQR = () => {
    if (this.state.showQR && Object.keys(this.state.vaccinesToGenerate).length === 0) {
      return (
        <>
          <QRCode
            value={JSON.stringify(this.state.user.vaccines)}
            size={128}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            renderAs={'svg'}
          />
        </>
      );
    } else if (this.state.showQR) {
      return (
        <QRCode
          value={JSON.stringify(this.state.vaccinesToGenerate)}
          size={128}
          bgColor={'#ffffff'}
          fgColor={'#000000'}
          level={'L'}
          includeMargin={false}
          renderAs={'svg'}
        />
      );
    }
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
            <DesktopBreakpoint>
              <Row className="justify-content-md-center">
                <Button variant="primary" onClick={() => this.showQR()}>
                  Generate
                </Button>
              </Row>
              <br />
              <Row className="justify-content-md-center">{this.renderQR()}</Row>
              <br />
              <p style={{ textAlign: 'center' }}>
                <b>My Vaccines QR Code</b>
              </p>
            </DesktopBreakpoint>

            <MobileBreakpoint>
              <Row className="justify-content-md-center">
                <Col>
                  <Row className="d-flex justify-content-center">
                    <Button variant="primary" onClick={() => this.showQR()}>
                      Generate
                    </Button>
                  </Row>
                  <br />
                  <Row className="d-flex justify-content-center">{this.renderQR()}</Row>
                  <br />
                  <p style={{ textAlign: 'center' }}>
                    <b>My Vaccines QR Code</b>
                  </p>
                </Col>
              </Row>
            </MobileBreakpoint>
          </Container>
          <br />
        </>
      );
    } else {
      return <>{this.renderVaccineDetails()} </>;
    }
  }
}
