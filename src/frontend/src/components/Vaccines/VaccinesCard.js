import React, { Component } from 'react';
import { Row, Col, Form, ListGroup } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default class VaccinesCard extends Component {
  render() {
    return (
      <ListGroup.Item>
        <Row>
          <Col sm={8}>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={this.props.disease} />
            </Form.Group>
          </Col>
          <Col sm={4}>
            <ArrowRightCircle size={20} />
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }
}
