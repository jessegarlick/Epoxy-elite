import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GetQuote from "./pages/GetQuote"; // Import the new page component
import logo from "./EpoxyStuff/blackWhite.jpg";
import Footer from "../src/components/Footer"; // Import the new footer component
import Faq from "../src/pages/Faq"
import 'bootstrap/dist/js/bootstrap.min.js'
import "./App.css";
import Careers from './pages/Careers'

function App() {
  const [isOpen, setIsOpen] = useState(false); // For mobile nav toggle

  const toggleNav = () => setIsOpen(!isOpen); // Function to toggle mobile navigation

  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/" className="logo-link">
            <img src={logo} alt="Epoxy Elite logo" />
          </NavLink>

      
          <div className={`links ${isOpen ? "open" : ""}`}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/get-quote">PRICING</NavLink>{" "}
            <NavLink to="/services">SERVICES</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>

          </div>
            <h3 className="phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            801-874-0118
          </h3>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} /> // Add this route

        </Routes>

      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
