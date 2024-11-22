import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';

function ProjectManager() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const addProject = (e) => {
    e.preventDefault();
    if (newProject.title && newProject.description) {
      setProjects([...projects, { ...newProject, id: Date.now() }]);
      setNewProject({ title: '', description: '' });
      Swal.fire('Success', 'Project added successfully!', 'success');
    }
  };

  const deleteProject = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setProjects(projects.filter(project => project.id !== id));
        Swal.fire('Deleted!', 'Your project has been deleted.', 'success');
      }
    });
  };

  return (
    <Container className="my-5">
      <h2>Project Manager</h2>
      <Row>
        <Col md={6}>
          <Form onSubmit={addProject}>
            <Form.Group controlId="projectTitle">
              <Form.Label>Project Title</Form.Label>
              <Form.Control 
                type="text" 
                name="title"
                value={newProject.title}
                onChange={handleInputChange}
                placeholder="Enter project title" 
              />
            </Form.Group>
            <Form.Group controlId="projectDescription">
              <Form.Label>Project Description</Form.Label>
              <Form.Control 
                as="textarea" 
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                placeholder="Enter project description" 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Project
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <ListGroup>
            {projects.map(project => (
              <ListGroup.Item key={project.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                </div>
                <Button variant="danger" onClick={() => deleteProject(project.id)}>Delete</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectManager;

