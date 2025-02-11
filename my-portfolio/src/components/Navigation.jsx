import { Link, NavLink } from "react-router-dom";
import "./CSS/Nav.css";
const Navigation = () => {
    return (
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <a href="/">MyPortfolio</a>
            </div>
            <ul className="navbar-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      );
    };

export default Navigation;
