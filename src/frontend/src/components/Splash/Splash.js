import React, { Component } from 'react';
import { Row, Col, Dropdown, DropdownButton, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Splash extends Component {
  state = { province: '' };

  onChangeProvince = (province) => {
    this.setState(() => ({
      province,
    }));
  };

  selectedProvince = (e, province) => {
    this.setState(() => ({ province }));
    this.props.onChangeProvince({ province: province });
  };

  renderProvinceButton = () => {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={3}>
            <DropdownButton id="dropdown-basic-button" title="Province">
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Alberta')}>
                Alberta
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'British Columbia')}>
                British Columbia
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Manitoba')}>
                Manitoba
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'New Brunswick')}>
                New Brunswick
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Newfoundland')}>
                Newfoundland
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Northwest Territories')}>
                Northwest Territories
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Nova Scotia')}>
                Nova Scotia
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Nunavut')}>
                Nunavut
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Ontario')}>
                Ontario
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Prince Edward Island')}>
                Prince Edward Island
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Quebec')}>
                Quebec
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Saskatchewan')}>
                Saskatchewan
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.selectedProvince(e, 'Yukon')}>
                Yukon
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    );
  };

  renderButtons = () => {
    return (
      <Container>
        <Row className="justify-content-md-center">
          {this.state.province !== '' && (
            <>
              <Col sm={3}>
                <Link to="/login">
                  <Button variant="success">Login</Button>
                </Link>
              </Col>
              <Col sm={3}>
                <Link to="/signup">
                  <Button variant="success">Signup</Button>
                </Link>
              </Col>
            </>
          )}
        </Row>
      </Container>
    );
  };

  renderSplash = () => {
    return (
      <div className="col-xs-1 text-center">
        <h1 className="p-2 col align-self-center">My Health Passport Canada</h1>
        <h5 className="p-2">Welcome to the Canada Digital Health Passport.</h5>
        <p className="p-2">Please select your province to log in.</p>
        {this.renderProvinceButton()}
        {this.renderButtons()}
      </div>
    );
  };

  render() {
    return this.renderSplash();
  }
}
