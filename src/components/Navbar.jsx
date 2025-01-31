import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Sklassics</div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About us</a>
        <a href="#jobs">Job List</a>
        <a href="#contact">Contact us</a>
        <a href="#pages">Pages</a>
      </div>
      <button className="post-job">POST A JOB</button>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;