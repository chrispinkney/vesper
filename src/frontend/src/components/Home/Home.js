import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../static/images/avatar.png';
import QRCode from 'qrcode.react';
import DesktopBreakpoint from '../ResponsiveUtilities/DesktopBreakpoint';
import MobileBreakpoint from '../ResponsiveUtilities/MobileBreakpoint';

export default class Home extends Component {
  state = { user: this.props.user };

  renderQR = () => {
    return (
      <>
        <DesktopBreakpoint>
          <QRCode
            value={JSON.stringify(this.state.user)}
            size={128}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            renderAs={'svg'}
          />
        </DesktopBreakpoint>
        <MobileBreakpoint>
          <QRCode
            value={JSON.stringify(this.state.user)}
            size={250}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            renderAs={'svg'}
          />
        </MobileBreakpoint>
      </>
    );
  };

  render() {
    return (
      <div className="col-xs-1 text-center">
        <Container>
          <DesktopBreakpoint>
            <Row className="justify-content-md-center">
              <Col sm={3}>
                <img src={Avatar} alt="Avatar" height={140} width={140} />
              </Col>
              <Col sm={2}>
                <h1>{this.state.user.fullName}</h1>
              </Col>
            </Row>
          </DesktopBreakpoint>
          <MobileBreakpoint>
            <br></br>
            <br></br>

            <Row>
              <Col>
                <img src={Avatar} alt="Avatar" height={140} width={140} />
              </Col>
              <Col>
                <h1>{this.state.user.fullName}</h1>
              </Col>
            </Row>
          </MobileBreakpoint>
          <Row className="justify-content-md-center">
            <Col sm={3}>
              <p>DOB:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.user.dateOfBirth}</p>
            </Col>
          </Row>
          <br />
          <Row className="d-flex justify-content-center">
            <DesktopBreakpoint>
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
            </DesktopBreakpoint>
            <MobileBreakpoint>
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
            </MobileBreakpoint>
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
          <br></br>
          <br></br>

          <DesktopBreakpoint>
            <br />
            <Row className="justify-content-md-center">{this.renderQR()}</Row>
            <br />
          </DesktopBreakpoint>
          <MobileBreakpoint>
            <br />
            <Row className="d-flex justify-content-center">{this.renderQR()}</Row>
            <br />
          </MobileBreakpoint>

          <p>
            <b>My Master Profile QR Code</b>
          </p>
        </Container>
      </div>
    );
  }
}
