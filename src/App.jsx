import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import GetQuote from './pages/GetQuote'; // Import the new page component
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false); // For mobile nav toggle

  const toggleNav = () => setIsOpen(!isOpen); // Function to toggle mobile navigation

  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/" className="logo-link"><h1>Epoxy Elite</h1></NavLink>
          <div className={`links ${isOpen ? 'open' : ''}`}>
            <NavLink to="/get-quote">Get Quote</NavLink>  {/* New NavLink for getting a quote */}
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;