import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/react-portfolio' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/react-portfolio/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
