import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Artwork from './components/pages/Artwork';
import Photography from './components/pages/Photography';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/artwork' element={<Artwork />} />
        <Route path='/portfolio/photography' element={<Photography />} />
        <Route path='/portfolio/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
