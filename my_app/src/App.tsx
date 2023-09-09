import React from 'react';

import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Socials } from './pages/Socials';
import { Navbar } from './components/Navbar';
import { Nav } from 'react-bootstrap';
import { Projects } from './pages/Projects';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/socials' element={<Socials />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>
    </>
  );
}

export default App;
