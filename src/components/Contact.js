import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <Container id="contact" className="py-5">
      <h2 className="display-4 mb-5 text-center">Hubungi Saya</h2>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama Anda" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email Anda" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Tulis pesan Anda di sini" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Kirim Pesan
            </Button>
          </Form>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <h3 className="mb-4">Informasi Kontak</h3>
          <p><FaEnvelope className="me-2 text-primary" /> email@example.com</p>
          <p><FaPhone className="me-2 text-primary" /> +62 123 456 7890</p>
          <p><FaMapMarkerAlt className="me-2 text-primary" /> Jakarta, Indonesia</p>
          <div className="mt-4">
            <h4>Ikuti Saya</h4>
            <a href="#" className="me-3 text-dark"><FaTwitter size={24} /></a>
            <a href="#" className="me-3 text-dark"><FaLinkedin size={24} /></a>
            <a href="#" className="me-3 text-dark"><FaGithub size={24} /></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

