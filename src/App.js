import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Journey from './pages/Journey';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';  
import logo from './Components/logo.jpg';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/journey" element={<Journey />} /> {/* Correct named import */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
