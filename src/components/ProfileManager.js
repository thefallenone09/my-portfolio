import React, { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';

function ProfileManager() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${profile.name}`, 10, 10);
    doc.text(`Email: ${profile.email}`, 10, 20);
    doc.text(`Phone: ${profile.phone}`, 10, 30);
    doc.text(`Address: ${profile.address}`, 10, 40);
    doc.text('Education:', 10, 50);
    doc.text(profile.education, 10, 60);
    doc.text('Experience:', 10, 80);
    doc.text(profile.experience, 10, 90);
    doc.text('Skills:', 10, 110);
    doc.text(profile.skills, 10, 120);
    doc.save("cv.pdf");
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Manage Your Profile</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={profile.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={profile.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" name="phone" value={profile.phone} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={profile.address} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Education</Form.Label>
          <Form.Control as="textarea" rows={3} name="education" value={profile.education} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Experience</Form.Label>
          <Form.Control as="textarea" rows={3} name="experience" value={profile.experience} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Skills</Form.Label>
          <Form.Control as="textarea" rows={3} name="skills" value={profile.skills} onChange={handleChange} />
        </Form.Group>
      </Form>
      <Row className="mt-4">
        <Col>
          <Button variant="primary" onClick={handlePrint}>Preview CV</Button>
        </Col>
        <Col>
          <Button variant="success" onClick={generatePDF}>Download CV as PDF</Button>
        </Col>
      </Row>
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          <h2>{profile.name}</h2>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
          <p>Address: {profile.address}</p>
          <h3>Education</h3>
          <p>{profile.education}</p>
          <h3>Experience</h3>
          <p>{profile.experience}</p>
          <h3>Skills</h3>
          <p>{profile.skills}</p>
        </div>
      </div>
    </Container>
  );
}

export default ProfileManager;

