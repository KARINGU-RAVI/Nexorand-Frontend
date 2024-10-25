import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
//import Modal from './components/Modal';
import './App.css';

const App = () => {

  return (
    <Router>
      <div className="app-container">
        {/* <Navbar />   */}
   
          <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
