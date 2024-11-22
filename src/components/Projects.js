import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects() {
  return (
    <Container id="projects" className="py-5">
      <h2>My Projects</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                This is a brief description of your first project.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more project cards here */}
      </Row>
    </Container>
  );
}

export default Projects;

