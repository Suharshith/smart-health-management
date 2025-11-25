import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="hero-section text-center">
                <Container>
                    <h1 className="display-3 mb-4">Welcome to SmartHealth</h1>
                    <p className="lead mb-5">
                        Advanced Health Management System for Modern Healthcare Facilities.
                        Streamline patient care with our intuitive platform.
                    </p>
                    <Button as={Link} to="/patients" variant="light" size="lg" className="rounded-pill px-5 fw-bold text-primary">
                        Get Started
                    </Button>
                </Container>
            </div>

            <Container className="mb-5">
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="card-custom h-100 p-4 text-center">
                            <Card.Body>
                                <div className="display-4 text-primary mb-3">
                                    <i className="bi bi-people"></i>
                                </div>
                                <Card.Title>Patient Management</Card.Title>
                                <Card.Text>
                                    Easily manage patient records, history, and contact information in one secure place.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-custom h-100 p-4 text-center">
                            <Card.Body>
                                <div className="display-4 text-primary mb-3">
                                    <i className="bi bi-calendar-check"></i>
                                </div>
                                <Card.Title>Smart Scheduling</Card.Title>
                                <Card.Text>
                                    Efficiently schedule appointments and manage doctor availability.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-custom h-100 p-4 text-center">
                            <Card.Body>
                                <div className="display-4 text-primary mb-3">
                                    <i className="bi bi-graph-up"></i>
                                </div>
                                <Card.Title>Analytics</Card.Title>
                                <Card.Text>
                                    Gain insights into clinic performance and patient demographics.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
