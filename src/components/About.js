import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

function About() {
  return (
    <Container id="about" className="py-5">
      <Row>
        <Col lg={6}>
          <h2 className="display-4 mb-4">Tentang Saya</h2>
          <p className="lead">Saya adalah seorang web developer dengan pengalaman dalam menciptakan solusi digital yang inovatif dan efektif.</p>
          <p>Dengan latar belakang dalam pengembangan front-end dan back-end, saya memiliki kemampuan untuk menghadirkan proyek web dari konsep hingga implementasi. Saya adalah pribadi yang cerdik, manipulatif, dan dapat bekerja sama dalam tim, yang memungkinkan saya untuk menghadapi berbagai tantangan dalam pengembangan web.</p>
          <h3 className="mt-4">Data Diri</h3>
          <ul>
            <li><strong>Nama:</strong> Rangga Arsena</li>
            <li><strong>Tanggal Lahir:</strong> 1 Januari 1999</li>
            <li><strong>Tempat Lahir:</strong> Batam</li>
            <li><strong>Umur:</strong> 25 tahun</li>
            <li><strong>Alamat:</strong> Tangerang, Indonesia</li>
            <li><strong>Email:</strong> ranggaarsena0@gmail.com</li>
            <li><strong>Telepon:</strong> +62 123 456 7890</li>
          </ul>
        </Col>
        <Col lg={6}>
          <img src="/RanggaGanteng.jpg" alt="Foto Profil Rangga Arsena" className="img-fluid rounded mb-4" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <FaCode size={50} className="text-primary mb-3" />
              <Card.Title>Web Development</Card.Title>
              <Card.Text>Membangun website responsif dengan teknologi terkini.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <FaPaintBrush size={50} className="text-success mb-3" />
              <Card.Title>UI/UX Design</Card.Title>
              <Card.Text>Merancang antarmuka yang menarik dan mudah digunakan.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body className="text-center">
              <FaMobileAlt size={50} className="text-info mb-3" />
              <Card.Title>Mobile-First Approach</Card.Title>
              <Card.Text>Mengoptimalkan pengalaman pengguna di semua perangkat.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

