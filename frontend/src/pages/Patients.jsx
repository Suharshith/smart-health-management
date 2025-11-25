import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Badge } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        loadPatients();
    }, []);

    const loadPatients = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/patients');
            setPatients(result.data);
        } catch (error) {
            console.error("Error loading patients:", error);
        }
    };

    const deletePatient = async (id) => {
        if (window.confirm("Are you sure you want to delete this patient?")) {
            try {
                await axios.delete(`http://localhost:8080/api/patients/${id}`);
                loadPatients();
            } catch (error) {
                console.error("Error deleting patient:", error);
            }
        }
    };

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Patient Records</h2>
                <Button as={Link} to="/add-patient" className="btn-custom">
                    + Add New Patient
                </Button>
            </div>

            <div className="card-custom p-4">
                <Table hover responsive className="align-middle">
                    <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Medical History</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id}>
                                <td className="fw-bold">{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>
                                    <Badge bg={patient.gender === 'Male' ? 'info' : 'danger'}>
                                        {patient.gender}
                                    </Badge>
                                </td>
                                <td>{patient.contact}</td>
                                <td>{patient.medicalHistory}</td>
                                <td>
                                    <Button variant="outline-danger" size="sm" onClick={() => deletePatient(patient.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        {patients.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-muted">
                                    No patients found. Add one to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default Patients;
