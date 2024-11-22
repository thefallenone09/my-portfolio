import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container id="home" className="min-vh-100 d-flex align-items-center">
      <Row>
        <Col className="fade-in">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a web developer passionate about creating amazing websites.</p>
          <Button as={Link} to="/about" variant="primary" className="mr-2">Learn More</Button>
          <Button variant="outline-primary" href="/your-cv.pdf" download>Download CV</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

