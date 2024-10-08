// src/App.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MemeMaker from './MemeMaker';
import Gallery from './Gallery';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <nav className="nav-bar">
        <Link to="/">puppetardio meme gen</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MemeMaker />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
