import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<Map />} /> 
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
