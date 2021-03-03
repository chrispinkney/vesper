import React, { Component } from 'react';
import { Row, Col, Container, Button, Card, ListGroup } from 'react-bootstrap';
import Header from '../Header/Header';
import VaccinesCard from '../Vaccines/VaccinesCard';

export default class Vaccines extends Component {
  state = { user: this.props.user, disease: '' };

  async componentDidMount() {
    const response = await fetch('api/getall');
    const json = await response.json();
    this.setState({ disease: json[0].Name });
  }

  render() {
    return (
      <>
        <Header headerText="Vaccines" infoState={true} />
        <div className="col-xs-1 text-center">
          <Container>
            <Row className="justify-content-md-center">
              <Col sm={4}>
                <br />
                <Card style={{ width: '18rem' }}>
                  <ListGroup variant="flush">
                    <VaccinesCard disease={this.state.disease} />
                  </ListGroup>
                </Card>
                <br />
              </Col>
            </Row>
            <hr />
            <br />
            <Row className="justify-content-md-center">
              <Button variant="primary">Generate</Button>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
