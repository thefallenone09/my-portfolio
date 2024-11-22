import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase } from 'react-icons/fa';

function WorkExperience() {
  const workHistory = [
    {
      position: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      year: "2018 - Sekarang",
      responsibilities: [
        "Memimpin tim pengembangan untuk proyek-proyek berskala besar",
        "Mengimplementasikan arsitektur microservices",
        "Mengoptimalkan kinerja aplikasi web"
      ]
    },
    {
      position: "Web Developer",
      company: "Digital Creations Co.",
      year: "2014 - 2018",
      responsibilities: [
        "Mengembangkan aplikasi web responsif menggunakan React dan Node.js",
        "Berkolaborasi dengan tim desain untuk mengimplementasikan UI/UX",
        "Melakukan pemeliharaan dan peningkatan pada sistem yang ada"
      ]
    }
  ];

  return (
    <Container id="work-experience" className="py-5">
      <h2 className="display-4 mb-5 text-center">Riwayat Pekerjaan</h2>
      {workHistory.map((work, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <Row>
              <Col md={2} className="text-center">
                <FaBriefcase size={40} className="text-primary mb-3" />
              </Col>
              <Col md={10}>
                <Card.Title>{work.position}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{work.company}</Card.Subtitle>
                <Card.Text>{work.year}</Card.Text>
                <ul>
                  {work.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default WorkExperience;

