import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
    const navigate = useNavigate();
    const [patient, setPatient] = useState({
        name: '',
        age: '',
        gender: 'Male',
        contact: '',
        medicalHistory: ''
    });

    const { name, age, gender, contact, medicalHistory } = patient;

    const onInputChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const patientData = { ...patient, age: parseInt(patient.age) };
            await axios.post('http://localhost:8080/api/patients', patientData);
            navigate('/patients');
        } catch (error) {
            console.error("Error adding patient:", error);
            alert("Error adding patient: " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <div className="card-custom p-5">
                        <h2 className="text-center mb-4 fw-bold">Add New Patient</h2>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter full name"
                                    name="name"
                                    value={name}
                                    onChange={onInputChange}
                                    required
                                />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Age"
                                            name="age"
                                            value={age}
                                            onChange={onInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select name="gender" value={gender} onChange={onInputChange}>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter contact number"
                                    name="contact"
                                    value={contact}
                                    onChange={onInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Medical History</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Brief medical history..."
                                    name="medicalHistory"
                                    value={medicalHistory}
                                    onChange={onInputChange}
                                />
                            </Form.Group>

                            <div className="d-grid">
                                <Button type="submit" className="btn-custom btn-lg">
                                    Submit Patient Record
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddPatient;
