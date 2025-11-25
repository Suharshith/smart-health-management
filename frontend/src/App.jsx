import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Patients from './pages/Patients';
import AddPatient from './pages/AddPatient';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/add-patient" element={<AddPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
