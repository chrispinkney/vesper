import React, { Component } from 'react';
import Header from '../Header/Header';
import {
  DropdownButton,
  Dropdown,
  Spinner,
  Row,
  Col,
  Form,
  Button,
  Container,
} from 'react-bootstrap';
export default class AddVaccine extends Component {
  state = { diseases: [] };

  async componentDidMount() {
    const response = await fetch('api/getallvaccines');
    const json = await response.json();
    this.setState(() => ({ diseases: json }));
  }

  render() {
    return (
      <>
        <Header headerText="Add Vaccine" infoState={false} />
        {Object.keys(this.state.diseases).length === 0 ? (
          <Row>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <Spinner animation="border" />
            </Col>
          </Row>
        ) : (
          <>
            <Container className="justify-content-md-center">
              <Row>
                <Col sm={12} style={{ textAlign: 'center' }}>
                  <br />
                  <br />
                  <DropdownButton id="dropdown-basic-button" title="Select a vaccine">
                    {Object.values(this.state.diseases).map((key) => {
                      return <Dropdown.Item key={key.name}>{key.name}</Dropdown.Item>;
                    })}
                  </DropdownButton>
                </Col>
              </Row>

              <Row className="justify-content-md-center">
                <Col sm={6}>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label style={{ textAlign: 'left' }}>Vaccine Code</Form.Label>
                      <Form.Control type="text" placeholder="Verification Code" />
                      <Form.Text className="text-muted" style={{ textAlign: 'left' }}>
                        This code should have been given to you by your doctor.
                      </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="justify-content-md-center">
                      Add
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </>
    );
  }
}
