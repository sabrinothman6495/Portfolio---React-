import { Link, NavLink } from "react-router-dom";
import React from "react";
import "../CSS/Nav.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo">Sabrin Othman</Link>
        </div>
        <ul className="navbar-links">
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
