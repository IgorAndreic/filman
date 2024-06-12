import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import MovieCatalog from './components/MovieCatalog';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieCatalog />} />
        </Routes>
    </Router>
  );
}

export default App;
