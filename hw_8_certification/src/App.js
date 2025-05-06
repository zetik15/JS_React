import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import CatalogWomen from './pages/CatalogWomen/CatalogWomen';
import CatalogMen from './pages/CatalogMen/CatalogMen';
import Cart from './pages/Cart/Cart';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog-women" element={<CatalogWomen />} />
          <Route path="/catalog-men" element={<CatalogMen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
