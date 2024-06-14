import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import HomeCatalog from './components/catalog/HomeCatalog';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<HomeCatalog />} />
        </Routes>
    </Router>
  );
}

export default App;
