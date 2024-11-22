import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container id="about" className="py-5">
      <Row>
        <Col>
          <h2>About Me</h2>
          <p>Here you can write a brief introduction about yourself, your skills, and your experiences.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

