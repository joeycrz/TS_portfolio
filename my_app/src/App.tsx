import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Navbar } from './components/Navbar';
import { Projects } from './pages/Projects';
import { Resume } from './pages/resume';

function App() {
  return (
    <>   
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
