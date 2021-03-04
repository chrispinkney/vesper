import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../static/images/avatar.png';
import QRCode from 'qrcode.react';

export default class Home extends Component {
  state = { user: this.props.user };

  renderQR = () => {
    return (
      <QRCode
        value={JSON.stringify(this.state.user)}
        size={128}
        bgColor={'#ffffff'}
        fgColor={'#000000'}
        level={'L'}
        includeMargin={false}
        renderAs={'svg'}
      />
    );
  };

  render() {
    return (
      <div className="col-xs-1 text-center">
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={3}>
              <img src={Avatar} alt="Avatar" height={140} width={140} />
            </Col>
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
        <Container>
          <Row>
            <Col sm={12}>
              <br />
              <Link to="/vaccines">
                <Button variant="primary">Vaccines</Button>
              </Link>
              &emsp;&emsp;&emsp;&emsp;&emsp;
              <Link to="/tests">
                <Button variant="primary">&nbsp;&nbsp;Tests&nbsp;&nbsp;</Button>
              </Link>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-md-center">{this.renderQR()}</Row>
          <br />
          <p>
            <b>My Master Profile QR Code</b>
          </p>
        </Container>
      </div>
    );
  }
}
