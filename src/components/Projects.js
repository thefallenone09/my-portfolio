import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sistem Manajemen Inventaris",
      description: "Aplikasi web untuk mengelola inventaris perusahaan dengan fitur pelacakan stok real-time.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Aplikasi Pemesanan Makanan Online",
      description: "Platform pemesanan makanan online dengan integrasi pembayaran dan pelacakan pengiriman.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Dashboard Analitik Bisnis",
      description: "Dashboard interaktif untuk visualisasi data bisnis dan pembuatan laporan otomatis.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "D3.js", "Python"]
    }
  ];

  return (
    <Container id="projects" className="py-5">
      <h2 className="display-4 mb-5 text-center">Proyek Saya</h2>
      <Row>
        {projects.map(project => (
          <Col md={4} key={project.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="mb-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge bg-primary me-2">{tech}</span>
                  ))}
                </div>
                <Button variant="outline-primary">Lihat Detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;

