import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact-me' element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
