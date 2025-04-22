// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Page principale avec formulaire

function App() {
  return (
    <Router>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
    </Router>
  );
}


export default App;
