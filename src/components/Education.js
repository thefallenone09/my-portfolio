import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  const educationHistory = [
    {
      degree: "Sarjana Teknologi Informasi",
      institution: "Universitas Aisyisyah Yogyakarta",
      year: "2017 - 2021",
      description: "Fokus pada pengembangan perangkat lunak dan sistem informasi."
    },
    {
      degree: "Sekolah Menengah Atas",
      institution: "Sekolah Global Indo Asia",
      year: "2015 - 2017",
      description: "Pendidikan menengah dengan fokus pada ilmu pengetahuan alam dan teknologi."
    }
  ];

  return (
    <Container id="education" className="py-5">
      <h2 className="display-4 mb-5 text-center">Riwayat Pendidikan</h2>
      <Row>
        {educationHistory.map((edu, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <FaGraduationCap size={40} className="text-primary mb-3" />
                <Card.Title>{edu.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{edu.institution}</Card.Subtitle>
                <Card.Text>{edu.year}</Card.Text>
                <Card.Text>{edu.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Education;

